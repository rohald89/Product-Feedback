const DropdownLabel = ({title, description}) => {
  return (
    <label className="text-veryDarkBlue text-sm font-bold tracking-tight block">
        {title}
        <span className="block text-greyBlue font-normal text-body-sm mt-1">{description}</span>
    </label>
  )
}
export default DropdownLabel
