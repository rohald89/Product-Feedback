const SingleReply = ({reply, isLast}) => {
  const {user, replyingTo, content} = reply;
  return (
          <div className="relative pl-6 pt-4 grid grid-cols-[56px_1fr] gap-y-2 md:grid-cols-[72px_1fr] md:pl-11 md:pt-6">
            { !isLast && <div className="bar"></div> }
              <img src={user.image} className="rounded-full h-10 w-10"/>
              <div className="flex justify-between">
                  <div>
                      <h3 className="text-sm font-bold tracking-tight text-veryDarkBlue">{user.name}</h3>
                      <p className="text-body-sm text-greyBlue">@{user.username}</p>
                  </div>
                  <button className="text-mainBlue font-bold">Reply</button>
              </div>
              <p className="text-greyBlue text-body-sm col-span-2 md:col-span-1 md:col-start-2">
                  <span className="text-mainPurple font-bold">@{replyingTo}</span> {content}
              </p>
          </div>
  )
}
export default SingleReply
