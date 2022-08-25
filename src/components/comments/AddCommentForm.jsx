const AddCommentForm = () => {
  return (
    <form className="bg-white rounded-[10px] space-y-6 p-6 mt-6 md:mt-0 flex flex-col md:p-8">
        <label className="text-md text-darkBlue font-bold" htmlFor="comment">Add Comment</label>
        <textarea
        name="comment"
        id="comment"
        placeholder="Type your comment here"
        className="py-4 px-6 rounded-md bg-lightGrey resize-none"
        ></textarea>
        <div className="flex justify-between items-center">
            <p className="text-greyBlue text-body-sm md:text-sm">250 Characters left</p>
            <button className="bg-mainPurple text-white text-sm font-bold py-3 px-6 rounded-[10px] transition hover:bg-mainPurple-hover">Post Comment</button>
        </div>
    </form>
  )
}
export default AddCommentForm
