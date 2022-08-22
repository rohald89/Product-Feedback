const PageWrapper = ({children}) => {
  return (
    <div className="min-h-screen bg-lightGrey">
        <div className="flex flex-col pb-16 md:items-start md:gap-6 md:pt-14 md:px-10 lg:flex-row max-w-6xl m-auto">
            {children}
        </div>
    </div>
  )
}
export default PageWrapper
