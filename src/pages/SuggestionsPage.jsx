import SuggestionsList from "../components/suggestionsList"
import Settings from "../components/settings"
import SuggestionsBanner from "../components/suggestionsList/SuggestionsBanner"
import PageWrapper from "../components/shared/PageWrapper"

const SuggestionsPage = () => {
  return (
    <PageWrapper className="md:items-start lg:flex-row">
        <Settings />
        <div className="flex flex-col w-full gap-6">
            <SuggestionsBanner />
            <SuggestionsList />
        </div>
    </PageWrapper>
  )
}
export default SuggestionsPage
