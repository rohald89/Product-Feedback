const SingleComment = ({comment}) => {
  return (
    <div className="grid grid-cols-[56px_1fr] gap-y-4 md:grid-cols-[72px_1fr]">
        <img src={comment.user.image} className="rounded-full h-10 w-10"/>
        <div className="flex justify-between">
            <div>
                <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue">{comment.user.name}</h3>
                <p className="text-body-sm text-greyBlue">@{comment.user.username}</p>
            </div>
            <button className="text-mainBlue font-bold">Reply</button>
        </div>
        <p className="text-greyBlue text-body-sm col-span-2 md:col-span-1 md:col-start-2">
            {comment.content}
        </p>
    </div>
  )
}
export default SingleComment
