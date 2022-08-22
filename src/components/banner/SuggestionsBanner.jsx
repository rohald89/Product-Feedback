import { useSelector } from "react-redux";
import Banner from "./Banner";

const SuggestionsBanner = () => {
  const { suggestions } = useSelector((state) => state.feedback);

  return (
    <Banner className=" px-6 py-2">
        <div className="hidden md:flex md:items-center">
            <img src="/img/suggestions/icon-suggestions.svg" />
            <p className="text-md font-bold ml-2 mr-10">{suggestions.length === 1 ? "1 Suggestion" : suggestions.length + " Suggestions"}</p>
        </div>
        <p className="flex-1">Sort by: <span className="font-bold">Most Upvotes</span></p>
        <button className="bg-mainPurple py-3 px-4 rounded-[10px]">+ Add Feedback</button>
    </Banner>
  )
}
export default SuggestionsBanner
