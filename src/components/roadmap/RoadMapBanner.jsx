import { Link } from "react-router-dom"
import Banner from "../shared/Banner"

const RoadMapBanner = () => {
  return (
    <Banner className="py-8 px-6 bg-veryDarkBlue md:py-10 md:px-8">
        <div className="flex flex-col gap-1">
            <Link to="/" className="flex items-center">
            <svg className="mr-4" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#fff" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                Go Back
            </Link>
            <h1 className="text-lg font-bold">Roadmap</h1>
        </div>
        <button className="bg-mainPurple py-3 px-4 rounded-[10px]">+ Add Feedback</button>
    </Banner>
  )
}
export default RoadMapBanner
