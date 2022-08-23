const PageWrapper = ({children, className}) => {
  return (
    <div className="min-h-screen bg-lightGrey">
        <div className={`flex flex-col pb-16 md:gap-6 md:pt-14 md:px-10 max-w-6xl m-auto ${className}`}>
            {children}
        </div>
    </div>
  )
}
export default PageWrapper
