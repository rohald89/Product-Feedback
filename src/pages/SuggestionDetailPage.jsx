import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CommentsSection from "../components/comments";
import AddCommentForm from "../components/comments/AddCommentForm";
import Banner from "../components/shared/Banner";
import PageWrapper from "../components/shared/PageWrapper";
import SingleSuggestion from "../components/suggestionsList/SingleSuggestion";

const SuggestionDetailPage = () => {
    const suggestion = useSelector((state) => state.feedback.suggestions.find((suggestion) => suggestion.id === Number(useParams().id)));

  return (
    <PageWrapper className="p-6">
        <Banner className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-greyBlue font-bold">
                <svg className="mr-4" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                Go Back
            </Link>
            <button className="bg-mainBlue py-3 px-4 text-sm rounded-[10px]">Edit Feedback</button>
        </Banner>
        <SingleSuggestion feedback={suggestion}/>
        <CommentsSection comments={suggestion.comments}/>
        <AddCommentForm />
    </PageWrapper>
  )
}
export default SuggestionDetailPage
