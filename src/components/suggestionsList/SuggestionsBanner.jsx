import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../shared/Banner";

const SuggestionsBanner = () => {
  const { suggestions } = useSelector((state) => state.feedback);
  const navigate = useNavigate();

  return (
    <Banner className="px-6 py-2 bg-veryDarkBlue md:pl-6 md:pr-4 md:py-4">
        <div className="hidden md:flex md:items-center">
            <img src="/img/suggestions/icon-suggestions.svg" />
            <p className="text-md font-bold ml-2 mr-10">{suggestions.length === 1 ? "1 Suggestion" : suggestions.length + " Suggestions"}</p>
        </div>
        <p className="flex-1">Sort by: <span className="font-bold">Most Upvotes</span></p>
        <button className="bg-mainPurple py-3 px-4 rounded-[10px] transition hover:bg-mainPurple-hover" onClick={() => navigate('/suggestions/new')}>+ Add Feedback</button>
    </Banner>
  )
}
export default SuggestionsBanner
