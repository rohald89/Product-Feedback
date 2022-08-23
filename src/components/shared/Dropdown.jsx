/* TODO */

const Dropdown = ({title, description, options}) => {
    return (
      <label className="text-veryDarkBlue text-sm font-bold tracking-tight block">
          {title}
          <span className="block text-greyBlue font-normal text-body-sm mt-1">{description}</span>
          <input type="text" className="py-3 px-6 mt-4 rounded-md w-full bg-lightGrey"/>
      </label>
    )
  }
  export default Dropdown