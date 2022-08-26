import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addReply } from '../../app/feedbackSlice';
import { useParams } from 'react-router-dom';

const AddReplyForm = ({open, setOpen, replyTo, commentId}) => {
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

    const container = {
        active: {
            height: 'auto',
        },
        disabled: {
            height: 0,
            transition: {
                delay: .12
            }
        }
    }

    const form = {
        active: {
            opacity: 1,
            transition: {
                delay: 0.12,
                duration: 0.2
            }
        },
        disabled: {
            opacity: 0,
        }
    }

    const formik = useFormik({
        initialValues: {
            reply: ""
        },
        onSubmit: (values) => {
            console.log(values, replyTo)
            dispatch(addReply({
                id,
                commentId,
                reply: values.reply,
                replyTo,
                currentUser}))
            formik.resetForm()
            setOpen(false)
        },
        validationSchema: Yup.object({
            reply: Yup.string().max("250", "Reply must be less than 250 characters").required("Reply is required")
        })
    })

  return (
    <>
        <motion.div
            variants={container}
            animate={open ? "active" : "disabled"}
            className="w-full col-span-full md:col-start-2"
        >
            <motion.form
            className="flex flex-col items-start w-full md:flex-row"
            onSubmit={formik.handleSubmit}
            variants={form}
            animate={open ? "active" : "disabled"}
            >
                <textarea
                name="reply"
                id="reply"
                placeholder="Type your reply here"
                className={`py-4 px-6 rounded-md bg-lightGrey w-full mb-4 resize-none md:mb-0 md:w-4/5 ${formik.errors.reply && "outline outline-2 outline-red-500"}`}
                value={formik.values.reply}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ></textarea>
                <button className="ml-auto bg-mainPurple text-white text-sm font-bold py-3 px-6 rounded-[10px] transition hover:bg-mainPurple-hover md:ml-4" type="submit">Post Reply</button>
            </motion.form>
        </motion.div>
    </>
  )
}
export default AddReplyForm
