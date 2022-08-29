import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSuggestions, changeSort } from "../../app/feedbackSlice";
import Banner from "../shared/Banner";
import SortingDropdown from "./SortingDropdown";

const SuggestionsBanner = () => {
  const suggestions = useSelector(getSuggestions);
  const {sortBy} = useSelector((state) => state.feedback);
  const stortingOptions = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSort = (option) => dispatch(changeSort(option))
  return (
    <Banner className="px-6 py-2 bg-veryDarkBlue md:pl-6 md:pr-4 md:py-4">
        <div className="hidden md:flex md:items-center">
            <img src="/img/suggestions/icon-suggestions.svg" />
            <p className="text-md font-bold ml-2 mr-10">{suggestions.length === 1 ? "1 Suggestion" : suggestions.length + " Suggestions"}</p>
        </div>
        <SortingDropdown options={stortingOptions} status={sortBy} setStatus={handleSort} />
        <button className="bg-mainPurple py-3 px-4 rounded-[10px] transition hover:bg-mainPurple-hover" onClick={() => navigate('/suggestions/new')}>+ Add Feedback</button>
    </Banner>
  )
}
export default SuggestionsBanner
