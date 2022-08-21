import { useState } from "react";
import Header from "./Header";
import RoadMapStats from "./RoadMapStats";
import TagSelection from "./TagSelection";

const Settings = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    }
    return (
    <div className={`${isOpen && "bg-black bg-opacity-30"} md:grid md:grid-cols-3 md:gap-3`}>
        <Header isOpen={isOpen} toggleNav={toggleNavigation} />

        <aside className={`${isOpen ? "flex" : "hidden"} flex-col p-6 ml-24 bg-lightGrey md:flex md:flex-row md:m-0 md:p-0 md:col-span-2 md:gap-3`}>
            <div className="flex-1 h-[178px]">
                <TagSelection />
            </div>
            <div className="flex-1">
                <RoadMapStats />
            </div>
        </aside>

    </div>
    )
};
export default Settings
