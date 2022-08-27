import { useState } from "react";
import { motion } from "framer-motion";

import Header from "./Header";
import RoadMapStats from "./RoadMapStats";
import CategoryMenu from "./CategoryMenu";
import useWindowSize from "../../hooks/useWindowSize";

const Settings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowSize();

    const isMobile = width < 768;

    const variants = isMobile ? {
        closed: {
            transform : "translateX(100%)",
            opacity : 0,
        },
        open: {
            transform : "translateX(0%)",
            opacity : 1,
        }
    } : {
        closed: {
            transform : "translateX(0%)",
            opacity : 1,
            transition: {
                duration: 0,
            }
        }
    };

    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    }



    return (
    <div className={`md:grid md:grid-cols-3 md:gap-3 lg:gap-0 lg:grid-cols-1 lg:max-w-[255px] lg:space-y-6`}>
        <Header isOpen={isOpen} toggleNav={toggleNavigation} />
        {/* <aside className={`col-span-2 flex-col space-y-6 p-6 bg-lightGrey md:space-y-0 md:grid md:grid-cols-2 md:m-0 md:p-0 md:col-span-2 md:gap-3 lg:flex lg:flex-col lg:gap-6`}> */}
        <motion.aside
        variants={variants}
        initial={isMobile ? "closed" : false}
        animate={isOpen ?  "open" : "closed"}
        className={`
        absolute right-0 w-3/4 h-full flex-col space-y-6 p-6 bg-lightGrey
        md:static md:w-auto md:space-y-0 md:grid md:grid-cols-2 md:m-0 md:p-0 md:col-span-2 md:gap-3 lg:flex lg:flex-col lg:gap-6`}>
            <div>
                <CategoryMenu />
            </div>
            <div className="">
                <RoadMapStats />
            </div>
        </motion.aside>

    </div>
    )
};
export default Settings
