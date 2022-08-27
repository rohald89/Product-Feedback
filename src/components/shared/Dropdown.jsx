import { motion } from "framer-motion";
import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import DropdownButton from "./DropdownButton";
import DropdownLabel from "./DropdownLabel";

const StatusDropdown = ({ options, status, setStatus, label = true, title = null, description = null, children }) => {
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
        { label && <DropdownLabel title={title} description={description} /> }
        <div className="relative mt-4">
            { children || <DropdownButton showMenu={showMenu} setShowMenu={setShowMenu} status={status}/> }
            <motion.div
            className="z-10 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white focus:outline-none"
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
                            {option.toLowerCase() === status.toLowerCase() && <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
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
