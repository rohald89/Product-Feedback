import { useSelector, useDispatch } from "react-redux"

import SuggestionsList from "../components/suggestionsList"
import Settings from "../components/settings"
import SuggestionsBanner from "../components/suggestionsList/SuggestionsBanner"
import PageWrapper from "../components/shared/PageWrapper"
import { useEffect, useState } from "react"

// import { getFilteredFeedback } from "../app/feedbackSlice"

const SuggestionsPage = () => {
    const stortingOptions = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];

    const { allFeedback, activeCategory } = useSelector((state) => state.feedback)
    const [sortBy, setSortBy] = useState("Most Upvotes");

    // const dispatch = useDispatch();
    const [filteredFeedback, setFilteredFeedback] = useState(allFeedback.filter((suggestion) => {
        if (activeCategory.toLowerCase() === "all") {
            return suggestion.status === "suggestion"
        } else if (suggestion.category.toLowerCase() === activeCategory.toLowerCase() && suggestion.status === "suggestion") {
            return suggestion
        }
      }));

    // const feedback = dispatch(getFilteredFeedback())

    // console.log(feedback);

    useEffect(() => {
        setFilteredFeedback(sortSuggestions(sortBy));
    }, [sortBy])

    const sortSuggestions = (sortBy) => {
        console.log('Sorting by:', sortBy);
      switch (sortBy) {
          case "Most Upvotes":
              return filteredFeedback.sort((a, b) => a.upvotes - b.upvotes)
          case "Least Upvotes":
              return filteredFeedback.sort((a, b) => b.upvotes - a.upvotes)
          case "Most Comments":
              return filteredFeedback.sort((a, b) => a.comments.length - b.comments.length)
          case "Least Comments":
              return filteredFeedback.sort((a, b) => b.comments.length - a.comments.length)
          default:
              return filteredFeedback
      }
   }

  return (
    <PageWrapper className="md:items-start lg:flex-row">
        <Settings />
        <div className="flex flex-col w-full gap-6">
            <SuggestionsBanner length={filteredFeedback.length} options={stortingOptions} status={sortBy} setStatus={setSortBy}/>
            <SuggestionsList suggestions={filteredFeedback}/>
        </div>
    </PageWrapper>
  )
}
export default SuggestionsPage
