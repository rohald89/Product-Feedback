import { useSelector } from "react-redux"
import NoSuggestionsFound from "./NoSuggestionsFound"
import SingleSuggestion from "./SingleSuggestion"

const SuggestionsList = () => {
  const { allFeedback, activeCategory } = useSelector((state) => state)

  // Filter the suggestions based on the currently active category
  const suggestions = allFeedback.filter((suggestion) => {
    if (activeCategory.toLowerCase() === "all") {
        return suggestion.status === "suggestion"
    } else if (suggestion.category.toLowerCase() === activeCategory.toLowerCase() && suggestion.status === "suggestion") {
        return suggestion
    }
  })

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
