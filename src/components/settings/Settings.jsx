import { useState } from "react";
import Header from "./Header";
import RoadMapStats from "./RoadMapStats";
import CategoryMenu from "./CategoryMenu";

const Settings = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    }
    return (
    <div className={`md:grid md:grid-cols-3 md:gap-3 lg:grid-cols-1 lg:max-w-[255px]`}>
        <Header isOpen={isOpen} toggleNav={toggleNavigation} />

        <aside className={`${isOpen ? "flex" : "hidden"} flex-col p-6 ml-24 bg-lightGrey md:flex md:flex-row md:m-0 md:p-0 md:col-span-2 md:gap-3 lg:flex-col`}>
            <div className="flex-1 h-[178px]">
                <CategoryMenu />
            </div>
            <div className="flex-1">
                <RoadMapStats />
            </div>
        </aside>

    </div>
    )
};
export default Settings
