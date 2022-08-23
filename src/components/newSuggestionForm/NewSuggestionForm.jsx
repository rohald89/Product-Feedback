import { useSelector } from "react-redux"
import Dropdown from "../shared/Dropdown"
import Input from "../shared/Input"
import TextArea from "../shared/TextArea"

const NewSuggestionForm = () => {
  const {categories} = useSelector(state => state.feedback)
  console.log(categories)

  return (
    <form className="bg-white rounded-[10px] space-y-6 p-6 mt-12 relative md:p-10">
        <svg className="absolute top-0 left-0 -translate-y-1/2 translate-x-6 md:translate-x-10" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stopColor="#E84D70" offset="0%"/><stop stopColor="#A337F6" offset="53.089%"/><stop stopColor="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fillRule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fillRule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g></svg>
        <fieldset className="space-y-8">
            <legend className="text-md text-darkBlue font-bold">Create new Feedback</legend>
            <Input title="Feedback Title" description="Add a short, descriptive headline."/>
            <Dropdown title="Category" description="Choose a category for your feedback" options={categories} />
            <TextArea title="Feedback Detail" description="Include any specific comments on what should be improved, added, etc."/>
            <div className="flex flex-col space-y-4 pt-6 md:flex-row-reverse md:space-y-0 md:gap-4">
                <button className="bg-mainPurple text-white text-sm font-bold py-3 px-6 rounded-[10px]">Add Feedback</button>
                <button className="bg-veryDarkBlue text-white text-sm font-bold py-3 px-6 rounded-[10px]">Cancel</button>
            </div>
        </fieldset>
    </form>
  )
}
export default NewSuggestionForm
