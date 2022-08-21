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
    <div className={`md:grid md:grid-cols-3 md:gap-3 lg:gap-0 lg:grid-cols-1 lg:max-w-[255px] lg:space-y-6`}>
        <Header isOpen={isOpen} toggleNav={toggleNavigation} />
        <aside className={`${isOpen ? "block" : "hidden"} col-span-2 flex-col space-y-6 p-6 bg-lightGrey md:space-y-0 md:grid md:grid-cols-2 md:m-0 md:p-0 md:col-span-2 md:gap-3 lg:flex lg:flex-col lg:gap-6`}>
            <div>
                <CategoryMenu />
            </div>
            <div className="">
                <RoadMapStats />
            </div>
        </aside>

    </div>
    )
};
export default Settings
