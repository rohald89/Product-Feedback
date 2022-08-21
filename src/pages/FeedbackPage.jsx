import FeedbackList from "../components/feedbackList"
import Menu from "../components/menu"
import Settings from "../components/settings"

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-lightGrey">
        <div className="flex flex-col pb-16 md:items-start md:gap-6 md:pt-14 md:px-10 lg:flex-row max-w-6xl m-auto">
            <Settings />
            <div className="flex flex-col w-full gap-6">
                <Menu />
                <FeedbackList />
            </div>
        </div>

    </div>
  )
}
export default FeedbackPage
