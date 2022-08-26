import { useState } from "react";
import AddReplyForm from "./AddReplyForm";
import SingleReply from "./SingleReply"

const SingleComment = ({comment}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
        <div className="grid grid-cols-[56px_1fr] gap-y-4 md:grid-cols-[72px_1fr]">
            <img src={comment.user.image} className="rounded-full h-10 w-10"/>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue">{comment.user.name}</h3>
                    <p className="text-body-sm text-greyBlue">@{comment.user.username}</p>
                </div>
                <button className="text-mainBlue font-bold" onClick={() => setOpen(!open)}>Reply</button>
            </div>
            <p className="text-greyBlue text-body-sm col-span-2 md:col-span-1 md:col-start-2">
                {comment.content}
            </p>
            <AddReplyForm open={open} setOpen={setOpen}/>
        </div>
        {
            comment.replies && (
                <div className="mt-2">
                    {comment.replies.map((reply, i) => (
                        <SingleReply key={i} reply={reply} replyTo={comment.user.name} isLast={i === comment.replies.length - 1} />
                    ))}
                </div>
            )
        }
    </div>
  )
}
export default SingleComment
