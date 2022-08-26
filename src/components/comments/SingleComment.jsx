import { useState } from "react";
import AddReplyForm from "./AddReplyForm";
import SingleReply from "./SingleReply"

const SingleComment = ({comment}) => {
  const [open, setOpen] = useState(false);

  const { user:{ name, username, image }, content, replies, id } = comment;

  return (
    <div className="relative">
        <div className="grid grid-cols-[56px_1fr] gap-y-4 md:grid-cols-[72px_1fr]">
            <img src={image} className="rounded-full h-10 w-10"/>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue">{name}</h3>
                    <p className="text-body-sm text-greyBlue">@{username}</p>
                </div>
                <button className="text-mainBlue font-bold hover:underline" onClick={() => setOpen(!open)}>Reply</button>
            </div>
            <p className="text-greyBlue text-body-sm col-span-2 md:col-span-1 md:col-start-2">
                {content}
            </p>
            <AddReplyForm open={open} setOpen={setOpen} replyTo={username} commentId={id}/>
        </div>
        {
            replies && (
                <div className="mt-2">
                    {replies.map((reply, i) => (
                        <SingleReply key={i} reply={reply} replyTo={name} isLast={i === replies.length - 1} commentId={id} />
                    ))}
                </div>
            )
        }
    </div>
  )
}
export default SingleComment
