import { useNavigate } from "react-router-dom";
import Banner from "../shared/Banner";
import SortingDropdown from "./SortingDropdown";

const SuggestionsBanner = ({length, options, status, setStatus}) => {
  const navigate = useNavigate();

  return (
    <Banner className="px-6 py-2 bg-veryDarkBlue md:pl-6 md:pr-4 md:py-4">
        <div className="hidden md:flex md:items-center">
            <img src="/img/suggestions/icon-suggestions.svg" />
            <p className="text-md font-bold ml-2 mr-10">{length === 1 ? "1 Suggestion" : length + " Suggestions"}</p>
        </div>
        <SortingDropdown options={options} status={status} setStatus={setStatus} />
        <button className="bg-mainPurple py-3 px-4 rounded-[10px] transition hover:bg-mainPurple-hover" onClick={() => navigate('/suggestions/new')}>+ Add Feedback</button>
    </Banner>
  )
}
export default SuggestionsBanner
