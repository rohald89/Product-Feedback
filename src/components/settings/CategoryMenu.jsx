import { useSelector, useDispatch } from "react-redux"
import { changeCategory } from "../../app/feedbackSlice"

const CategoryMenu = () => {
  const {categories, activeCategory} = useSelector((state) => state.feedback)
  const dispatch = useDispatch()

  return (
    <section className="flex p-6 flex-wrap gap-2 h-full bg-white rounded-[10px]">
        {
            categories.map((category, i) => (
                <button
                aria-label={`Change category to ${category}`}
                key={i}
                className={`${category === activeCategory ? "bg-mainBlue text-white" : "bg-grey text-mainBlue"} px-4 py-2 font-bold text-body-sm  rounded-[10px]`}
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
