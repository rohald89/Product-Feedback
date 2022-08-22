const Banner = ({ children, className }) => {
  return (
    <div className={`${className} flex justify-between text-white items-center bg-veryDarkBlue w-full md:rounded-[10px] md:pl-6 md:pr-4 md:py-4`}>
      {children}
    </div>
  );
};
export default Banner;
