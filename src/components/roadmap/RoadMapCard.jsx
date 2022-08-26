import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { upvoteFeedback } from "../../app/feedbackSlice";
import { addUpvote } from "../../app/userSlice";


const RoadMapCard = ({feedback, color}) => {
  const {id, title, description, status, category, upvotes, comments} = feedback;
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isUpvoted = currentUser.upvotes.includes(id)

  const upvote = () => {
    dispatch(upvoteFeedback({id, currentUser}))
    dispatch(addUpvote({id}))
  }

  return (
    <div className={`grid grid-cols-2 gap-4 bg-white p-5 pt-4 border-t-[6px] rounded-b-[10px] rounded-t-[5px]
    ${color === "orange" ? "border-mainOrange" : color === "purple" ? "border-mainPurple" : "border-lightBlue"}`}>
        <Link to={`/suggestions/${id}`} className="col-span-2 flex flex-col items-start min-h-[160px] group">
            <div className="flex items-center mb-4">
                <div className={`h-2 w-2 rounded-full ${color === "orange" ? "bg-mainOrange" : color === "purple" ? "bg-mainPurple" : "bg-lightBlue"}`}></div>
                <p className="ml-2 text-body-sm text-greyBlue capitalize">{status.replace('-', ' ')}</p>
            </div>
            <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue transition group-hover:text-mainBlue">{title}</h3>
            <p className="text-body-sm text-greyBlue mt-2 mb-4">{description}</p>
            <p className="bg-grey text-mainBlue px-4 py-2 capitalize font-bold text-body-sm mt-auto rounded-[10px]">{category}</p>
        </Link>
        <button
        onClick={() => upvote()}
        className={`${isUpvoted ? "bg-mainBlue text-white" : "bg-grey text-veryDarkBlue"} group transition my-auto flex items-center place-self-start space-x-2 px-4 py-2 font-bold text-body-sm  rounded-[10px] hover:bg-grey-hover hover:text-veryDarkBlue`}>
            <svg className={`${isUpvoted ? "stroke-grey" : "stroke-mainBlue"} transition group-hover:stroke-mainBlue`} width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
            <p className="text-body-sm">{upvotes}</p>
        </button>
        <div className="flex my-auto items-center place-self-end space-x-2 font-bold">
            <img src="/img/shared/icon-comments.svg" />
            <p className={`${!comments && "opacity-50"} text-body-sm text-veryDarkBlue`}>{comments ? comments.length : "0"}</p>
        </div>
    </div>
  )
}

export default RoadMapCard
