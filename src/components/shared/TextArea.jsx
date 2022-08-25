const TextArea = ({title, description, name, ...props}) => {
    return (
        <div>
        <label className="text-veryDarkBlue text-sm font-bold tracking-tight block" htmlFor={name}>
            {title}
            <span className="block text-greyBlue font-normal text-body-sm mt-1">{description}</span>
            <textarea type="text" className={`${props.errors && "outline outline-2 outline-red-500"} cursor-pointer py-3 px-6 mt-4 rounded-md w-full bg-lightGrey resize-none`} name={name} {...props}/>
        </label>
        {
            props.errors && <p className="text-red-600 text-sm mt-1">{props.errors}</p>
        }
    </div>
    )
  }
  export default TextArea
