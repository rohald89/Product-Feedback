const SingleReply = ({reply, replyTo, isLast}) => {
  return (
          <div className="relative pt-6 pl-6 grid grid-cols-[56px_1fr] gap-y-4 md:grid-cols-[72px_1fr] md:pl-11">
            { !isLast && <div className="bar"></div> }
              <img src={reply.user.image} className="rounded-full h-10 w-10"/>
              <div className="flex justify-between">
                  <div>
                      <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue">{reply.user.name}</h3>
                      <p className="text-body-sm text-greyBlue">@{reply.user.username}</p>
                  </div>
                  <button className="text-mainBlue font-bold">Reply</button>
              </div>
              <p className="text-greyBlue text-body-sm col-span-2 md:col-span-1 md:col-start-2">
                  <span className="text-mainPurple font-bold">@{replyTo}</span> {reply.content}
              </p>
          </div>
  )
}
export default SingleReply
