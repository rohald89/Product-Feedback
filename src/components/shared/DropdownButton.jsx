const DropdownButton = ({showMenu, setShowMenu, status}) => {
  return (
    <button
        onClick={() => setShowMenu(!showMenu )}
        type="button"
        className="inline-flex justify-between capitalize items-center w-full rounded-md shadow-sm px-4 py-2 bg-lightGrey text-sm font-medium text-veryDarkBlue focus:outline-mainBlue dark:bg-darkGrey "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        >
        {status}
        <svg className={`-mr-1 ml-2 h-5 w-5 fill-mainBlue ${showMenu && "rotate-180"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    </button>
  )
}
export default DropdownButton
