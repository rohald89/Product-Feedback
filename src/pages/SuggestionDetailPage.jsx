import { useParams } from "react-router-dom";
import PageWrapper from "../components/shared/PageWrapper";

const SuggestionDetailPage = () => {
    const {id} = useParams();
    console.log(id)
  return (
    <PageWrapper>

    </PageWrapper>
  )
}
export default SuggestionDetailPage
