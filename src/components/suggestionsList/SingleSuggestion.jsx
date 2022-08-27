import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { upvoteFeedback } from "../../app/feedbackSlice";
import { addUpvote} from "../../app/userSlice";

const SingleSuggestion = ({feedback, ...props}) => {
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {id, title, description, category, upvotes, comments} = feedback

  const isUpvoted = currentUser.upvotes.includes(id)

  const upvote = () => {
    dispatch(upvoteFeedback({id, currentUser}))
    dispatch(addUpvote({id}))
  }
  return (
        <motion.div
        className="grid grid-cols-2 gap-4 bg-white rounded-[10px] p-6 md:flex md:items-center"
        {...props}
        >
            <Link to={`/suggestions/${id}`} className="group col-span-2 flex flex-col items-start space-y-2 md:flex-1">
                <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue transition group-hover:text-mainBlue">{title}</h3>
                <p className="text-body-sm text-greyBlue">{description}</p>
                <p className="bg-grey text-mainBlue px-4 py-2 capitalize font-bold text-body-sm  rounded-[10px]">{category}</p>
            </Link>
            <button
            onClick={() => upvote()}
            className={`${isUpvoted ? "bg-mainBlue text-white" : "bg-grey text-veryDarkBlue"} group transition flex items-center place-self-start space-x-2 px-4 py-2 font-bold text-body-sm  rounded-[10px] md:-order-1 md:flex-col md:items-center md:space-x-0 md:space-y-2 md:mr-10 hover:bg-grey-hover hover:text-veryDarkBlue`}
            >
                <svg className={`${isUpvoted ? "stroke-grey" : "stroke-mainBlue"} transition group-hover:stroke-mainBlue`} width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                <p className="text-body-sm">{upvotes}</p>
            </button>
            <div className="flex items-center place-self-end space-x-2 font-bold md:place-self-auto">
                <img src="/img/shared/icon-comments.svg" className="" />
                <p className={`${!comments && "opacity-50"} text-body-sm text-veryDarkBlue`}>{comments ? comments.length : "0"}</p>
            </div>
        </motion.div>
  )
}
export default SingleSuggestion
