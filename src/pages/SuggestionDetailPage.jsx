import { Link, useParams } from "react-router-dom";
import CommentsSection from "../components/comments";
import AddCommentForm from "../components/comments/AddCommentForm";
import Banner from "../components/shared/Banner";
import PageWrapper from "../components/shared/PageWrapper";
import SingleSuggestion from "../components/suggestionsList/SingleSuggestion";

import { feedback } from "../data";

const SuggestionDetailPage = () => {
    console.log(feedback)
    const suggestion = feedback.filter((suggestion) => suggestion.id === Number(useParams().id))[0];

  return (
    <PageWrapper className="p-6 max-w-3xl">
        <Banner className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-greyBlue font-bold hover:underline">
                <svg className="mr-4" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                Go Back
            </Link>
            <button className="bg-mainBlue py-3 px-4 text-sm rounded-[10px] transition hover:bg-mainBlue-hover">Edit Feedback</button>
        </Banner>
        <SingleSuggestion feedback={suggestion}/>
        {
            suggestion.comments && (
                <CommentsSection comments={suggestion.comments}/>
            )
        }
        <AddCommentForm />
    </PageWrapper>
  )
}
export default SuggestionDetailPage
