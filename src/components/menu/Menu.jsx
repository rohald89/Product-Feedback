import { useSelector } from "react-redux";

const Menu = () => {
  const { feedback } = useSelector((state) => state.feedback);
  const numberOfSuggestions = feedback.reduce((acc, curr) => {
    if (curr.status === "suggestion") {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div className="flex justify-between text-white items-center bg-veryDarkBlue w-full px-6 py-2 md:rounded-[10px] md:pl-6 md:pr-4 md:py-4">
        <div className="hidden md:flex md:items-center">
            <img src="/img/suggestions/icon-suggestions.svg" />
            <p className="text-md font-bold ml-2 mr-10">{numberOfSuggestions} Suggestions</p>
        </div>
        <p className="flex-1">Sort by: <span className="font-bold">Most Upvotes</span></p>
        <button className="bg-mainPurple py-3 px-4 rounded-[10px]">+ Add Feedback</button>
    </div>
  )
}
export default Menu
