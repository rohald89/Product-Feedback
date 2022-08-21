const Header = ({isOpen, toggleNav}) => {
  return (
    <header className="flex h-full justify-between text-white py-4 px-6 bg-mobile-header bg-no-repeat bg-cover md:bg-tablet-header md:p-6 lg:bg-desktop-header md:rounded-[10px] lg:h-[137px]">
      <div className="md:mt-auto">
        <h1 className="text-body-md font-bold md:text-lg">Frontend Mentor</h1>
        <p className="text-body-sm font-medium opacity-75 md:text-body-md">
          Feedback Board
        </p>
      </div>
      <button onClick={() => toggleNav()} className="md:hidden">
        {
            isOpen ? (
                <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z" fill="#FFF" fillRule="evenodd"/></svg>
            ) : (
                <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                    <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
                </g>
                </svg>
            )
        }
      </button>
    </header>
  );
};
export default Header;
