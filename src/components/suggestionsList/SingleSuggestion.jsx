import { Link } from "react-router-dom"

const SingleSuggestion = ({feedback}) => {
   const {id, title, description, category, upvotes, comments} = feedback
  return (
    <Link to={`/suggestions/${id}`}>
                    <div className="grid grid-cols-2 gap-4 bg-white rounded-[10px] p-6 md:flex md:items-center">
                        <div className="col-span-2 flex flex-col items-start space-y-2 md:flex-1">
                            <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue">{title}</h3>
                            <p className="text-body-sm text-greyBlue">{description}</p>
                            <p className="bg-grey text-mainBlue px-4 py-2 capitalize font-bold text-body-sm  rounded-[10px]">{category}</p>
                        </div>
                        <button className="flex items-center place-self-start space-x-2 bg-grey px-4 py-2 font-bold text-body-sm  rounded-[10px] md:-order-1 md:flex-col md:items-center md:space-x-0 md:space-y-2 md:mr-10">
                            <img src="/img/shared/icon-arrow-up.svg" className="" />
                            <p className="text-body-sm text-veryDarkBlue">{upvotes}</p>
                        </button>
                        <div className="flex items-center place-self-end space-x-2 font-bold md:place-self-auto">
                            <img src="/img/shared/icon-comments.svg" className="" />
                            <p className={`${!comments && "opacity-50"} text-body-sm text-veryDarkBlue`}>{comments ? comments.length : "0"}</p>
                        </div>
                    </div>
                </Link>
  )
}
export default SingleSuggestion
