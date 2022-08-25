import { useState } from "react";
import { useSelector } from "react-redux";
import RoadMapTabs from "./RoadMapTabs";

const MobileRoadMap = () => {
  const { allFeedback } = useSelector((state) => state.feedback);
  const [activeTab, setActiveTab] = useState("In-Progress");

  const inProgress = allFeedback.filter((item) => item.status !== "suggestion");

  return (
    <div>
        <RoadMapTabs activeTab={activeTab} setActiveTab={setActiveTab} tasks={inProgress} />
    </div>
  )
}
export default MobileRoadMap
