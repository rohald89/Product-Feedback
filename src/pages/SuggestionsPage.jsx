import FeedbackList from "../components/suggestionsList"
import Settings from "../components/settings"
import SuggestionsBanner from "../components/suggestionsList/SuggestionsBanner"
import PageWrapper from "../components/shared/PageWrapper"

const SuggestionsPage = () => {
  return (
    <PageWrapper >
        <Settings />
        <div className="flex flex-col w-full gap-6">
            <SuggestionsBanner />
            <FeedbackList />
        </div>
    </PageWrapper>
  )
}
export default SuggestionsPage
