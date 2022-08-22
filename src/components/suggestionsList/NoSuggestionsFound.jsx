const NoSuggestionsFound = () => {
  return (
    <section className="flex flex-col items-center bg-white rounded-[10px] px-6 py-20 md:py-28">
        <img src="img/suggestions/illustration-empty.svg" className="mb-10"/>
        <h1 className="text-md text-veryDarkBlue font-bold mb-3 md:text-xl md:mb-4">There is no feedback yet.</h1>
        <p className="text-body-sm text-center text-greyBlue mb-4 md:text-body-lg max-w-[410px]">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <button className="bg-mainPurple text-body-sm text-white text-bold py-3 px-4 rounded-[10px]">+ Add Feedback</button>
    </section>
  )
}
export default NoSuggestionsFound
