import SingleComment from "./SingleComment"

const CommentsSection = ({comments}) => {
  return (
    <section className="bg-white rounded-[10px] space-y-6 p-6 mt-6 md:mt-0">
        <h2 className="text-md text-darkBlue font-bold mb-6">{comments.length} Comments</h2>
        {comments.map((comment) => (
            <SingleComment key={comment.id} comment={comment} />
        ))}
    </section>
  )
}
export default CommentsSection
