import NoSuggestionsFound from "./NoSuggestionsFound"
import SingleSuggestion from "./SingleSuggestion"

const SuggestionsList = ({suggestions}) => {
    return (
    <div className="flex flex-col space-y-4 pt-8 px-6 md:p-0">
        {
            suggestions.length === 0 ? <NoSuggestionsFound /> : suggestions.map((feedback, i) => (
                <SingleSuggestion
                key={feedback.id}
                feedback={feedback}
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: .3, delay: i * .1 }}
                />
            ))
        }
    </div>
  )
}
export default SuggestionsList
