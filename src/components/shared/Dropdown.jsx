import { motion } from "framer-motion";
import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const StatusDropdown = ({ title, description, options, status, setStatus }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setShowMenu(false));

  const menuVariations = {
    closed: {
        opacity: 0,
        y: -10,
        pointerEvents: 'none',
    },
    open: {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
    }
}

  return (
    <div ref={dropdownRef}>
        <label className="text-veryDarkBlue text-sm font-bold tracking-tight block">
            {title}
            <span className="block text-greyBlue font-normal text-body-sm mt-1">{description}</span>
        </label>
        <div className="relative mt-4">
            <button
                onClick={() => setShowMenu(!showMenu )}
                type="button"
                className="inline-flex justify-between items-center w-full rounded-md shadow-sm px-4 py-2 bg-lightGrey text-sm font-medium text-veryDarkBlue focus:outline-mainBlue dark:bg-darkGrey "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                >
                {status}
                <svg className={`-mr-1 ml-2 h-5 w-5 fill-mainBlue ${showMenu && "rotate-180"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <motion.div
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white focus:outline-none"
            variants={menuVariations}
            initial="closed"
            animate={showMenu ? "open" : "closed"}>
                <div className="py-1" >
                    {options.map((option, i) => (
                        <a
                        onClick={() => {
                            if(status) {
                                setStatus(option);
                            }
                            setShowMenu(false)
                        }}
                        key={i}
                        href="#"
                        className="flex justify-between text-greyBlue px-4 py-2 text-sm border-b border-grey hover:text-mainPurple hover:bg-opacity-10"
                    >
                            {option}
                            {option === status && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
                            }
                        </a>
                    ))}
                </div>
            </motion.div>
        </div>
    </div>
  )
}
export default StatusDropdown
