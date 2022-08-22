import { useSelector } from "react-redux"
import NoSuggestionsFound from "./NoSuggestionsFound"
import SingleSuggestion from "./SingleSuggestion"

const SuggestionsList = () => {
  const { suggestions } = useSelector((state) => state.feedback)

    return (
    <div className="flex flex-col space-y-4 pt-8 px-6 md:p-0">
        {
            suggestions.length === 0 ? <NoSuggestionsFound /> : suggestions.map((feedback) => (
                <SingleSuggestion key={feedback.id} feedback={feedback}/>
            ))
        }
    </div>
  )
}
export default SuggestionsList
