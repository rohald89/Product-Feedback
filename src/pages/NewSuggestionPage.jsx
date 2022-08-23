import { Link } from "react-router-dom";
import NewSuggestionForm from "../components/newSuggestionForm";
import Banner from "../components/shared/Banner";
import Input from "../components/shared/Input";
import PageWrapper from "../components/shared/PageWrapper"

const NewSuggestionPage = () => {
  return (
    <PageWrapper className="p-6">
        <Banner className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-greyBlue font-bold">
                <svg className="mr-4" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                Go Back
            </Link>
        </Banner>
        <NewSuggestionForm />
    </PageWrapper>
  )
}
export default NewSuggestionPage;
