import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const SuggestionsList = () => {
  const { suggestions } = useSelector((state) => state.feedback)

    return (
    <div className="flex flex-col space-y-4 pt-8 px-6 bg-lightGrey md:p-0">
        {
            suggestions.map((feedback) => (
                <Link to={`/feedback/${feedback.id}`} key={feedback.id}>
                    <div className="grid grid-cols-2 gap-4 bg-white rounded-[10px] p-6 md:flex md:items-center">
                        <div className="col-span-2 flex flex-col items-start space-y-2 md:flex-1">
                            <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue">{feedback.title}</h3>
                            <p className="text-body-sm text-greyBlue">{feedback.description}</p>
                            <p className="bg-grey text-mainBlue px-4 py-2 capitalize font-bold text-body-sm  rounded-[10px]">{feedback.category}</p>
                        </div>
                        <button className="flex items-center place-self-start space-x-2 bg-grey px-4 py-2 font-bold text-body-sm  rounded-[10px] md:-order-1 md:flex-col md:items-center md:space-x-0 md:space-y-2 md:mr-10">
                            <img src="/img/shared/icon-arrow-up.svg" className="" />
                            <p className="text-body-sm text-veryDarkBlue">{feedback.upvotes}</p>
                        </button>
                        <div className="flex items-center place-self-end space-x-2 font-bold md:place-self-auto">
                            <img src="/img/shared/icon-comments.svg" className="" />
                            <p className={`${!feedback.comments && "opacity-50"} text-body-sm text-veryDarkBlue`}>{feedback.comments ? feedback.comments.length : "0"}</p>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}
export default SuggestionsList
