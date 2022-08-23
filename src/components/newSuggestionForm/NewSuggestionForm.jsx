import { useSelector } from "react-redux"
import Dropdown from "../shared/Dropdown"
import Input from "../shared/Input"
import TextArea from "../shared/TextArea"

const NewSuggestionForm = () => {
  const {categories} = useSelector(state => state.feedback)
  console.log(categories)

  return (
    <form className="bg-white rounded-[10px] space-y-6 p-6 mt-12">
        <fieldset className="space-y-6">
            <legend className="text-md text-darkBlue font-bold mt-6">Create new Feedback</legend>
            <Input title="Feedback Title" description="Add a short, descriptive headline."/>
            <Dropdown title="Category" description="Choose a category for your feedback" options={categories} />
            <TextArea title="Feedback Detail" description="Include any specific comments on what should be improved, added, etc."/>
        </fieldset>
    </form>
  )
}
export default NewSuggestionForm
