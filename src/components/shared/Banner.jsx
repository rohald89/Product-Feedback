const Banner = ({ children, className }) => {
  return (
    <div className={`${className} flex justify-between text-white items-center w-full md:rounded-[10px]`}>
      {children}
    </div>
  );
};
export default Banner;
