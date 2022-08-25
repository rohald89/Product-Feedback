import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik"
import * as Yup from "yup"

import { addComment } from "../../app/feedbackSlice"

const AddCommentForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    const formik = useFormik({
        initialValues: {
            comment: ""
        },
        onSubmit: (values) => {
            dispatch(addComment({id, comment: values.comment, currentUser}))
            formik.resetForm()
        },
        validationSchema: Yup.object({
            comment: Yup.string().max("250", "Comment must be less than 250 characters").required("Comment is required")
        })
    })

  return (
    <form className="bg-white rounded-[10px] space-y-6 p-6 mt-6 md:mt-0 flex flex-col md:p-8" onSubmit={formik.handleSubmit}>
        <label className="text-md text-darkBlue font-bold" htmlFor="comment">Add Comment</label>
        <textarea
        name="comment"
        id="comment"
        placeholder="Type your comment here"
        className={`py-4 px-6 rounded-md bg-lightGrey resize-none ${formik.errors.comment && "outline outline-2 outline-red-500"}`}
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        ></textarea>
        <div className="flex justify-between items-center">
            {
                formik.errors.comment ? (
                    <p className="text-red-600 text-sm mt-1">{formik.errors.comment}</p>
                ) : (
                    <p className="text-greyBlue text-body-sm md:text-sm">{250 - formik.values.comment.length} Characters left</p>
                )
            }
            <button className="bg-mainPurple text-white text-sm font-bold py-3 px-6 rounded-[10px] transition hover:bg-mainPurple-hover" type="submit">Post Comment</button>
        </div>
    </form>
  )
}
export default AddCommentForm
