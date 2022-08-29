import { useSelector, useDispatch } from "react-redux"
import { changeCategory } from "../../app/feedbackSlice"

const CategoryMenu = () => {
  const { activeCategory} = useSelector((state) => state.feedback)
  const categories = ["UI", "UX", "Enhancement", "Bug", "Feature"]
  const dispatch = useDispatch()

  return (
    <section className="flex p-6 flex-wrap gap-2 h-full bg-white rounded-[10px]">
        <button
            aria-label={`Change category to All`}
            className={`${activeCategory.toLowerCase() === "all" ? "bg-mainBlue text-white" : "bg-grey text-mainBlue"} px-4 py-2 font-bold text-body-sm  rounded-[10px] transition hover:bg-grey-hover hover:text-mainBlue`}
            onClick={() => dispatch(changeCategory("All"))}
        >
            All
        </button>
        {
            categories.map((category, i) => (
                <button
                aria-label={`Change category to ${category}`}
                key={i}
                className={`${category === activeCategory ? "bg-mainBlue text-white" : "bg-grey text-mainBlue"} px-4 py-2 font-bold text-body-sm  rounded-[10px] transition hover:bg-grey-hover hover:text-mainBlue`}
                onClick={() => dispatch(changeCategory(category))}
                >
                    {category}
                </button>
            ))
        }
    </section>
  )
}
export default CategoryMenu
