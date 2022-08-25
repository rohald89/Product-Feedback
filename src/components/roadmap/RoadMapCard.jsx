import { Link } from "react-router-dom"


const RoadMapCard = ({feedback, color}) => {
  const {id, title, description, status, category, upvotes, comments} = feedback;
  return (
    <div className={`grid grid-cols-2 gap-4 bg-white p-5 pt-4 border-t-[6px] rounded-b-[10px] rounded-t-[5px]
    ${color === "orange" ? "border-mainOrange" : color === "purple" ? "border-mainPurple" : "border-lightBlue"}`}>
        <Link to={`/suggestions/${id}`} className="col-span-2 flex flex-col items-start h-[160px]">
            <div className="flex items-center mb-4">
                <div className={`h-2 w-2 rounded-full ${color === "orange" ? "bg-mainOrange" : color === "purple" ? "bg-mainPurple" : "bg-lightBlue"}`}></div>
                <p className="ml-2 text-body-sm text-greyBlue capitalize">{status.replace('-', ' ')}</p>
            </div>
            <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue">{title}</h3>
            <p className="text-body-sm text-greyBlue mt-2 mb-4">{description}</p>
            <p className="bg-grey text-mainBlue px-4 py-2 capitalize font-bold text-body-sm  rounded-[10px]">{category}</p>
        </Link>
        <button className="my-auto flex items-center place-self-start space-x-2 bg-grey px-4 py-2 font-bold text-body-sm  rounded-[10px] hover:bg-grey-hover">
            <img src="/img/shared/icon-arrow-up.svg"/>
            <p className="text-body-sm text-veryDarkBlue">{upvotes}</p>
        </button>
        <div className="flex my-auto items-center place-self-end space-x-2 font-bold">
            <img src="/img/shared/icon-comments.svg" />
            <p className={`${!comments && "opacity-50"} text-body-sm text-veryDarkBlue`}>{comments ? comments.length : "0"}</p>
        </div>
    </div>
  )
}

export default RoadMapCard
