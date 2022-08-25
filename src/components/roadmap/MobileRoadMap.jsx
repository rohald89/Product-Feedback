import { useState } from "react";
import { useSelector } from "react-redux";
import RoadMapCard from "./RoadMapCard";
import RoadMapTabs from "./RoadMapTabs";

const MobileRoadMap = () => {
  const { allFeedback } = useSelector((state) => state.feedback);
  const [activeTab, setActiveTab] = useState("In-Progress");

  const inProgress = allFeedback.filter((item) => item.status !== "suggestion");

  const statuses = [
    { name: "Planned", description: "Ideas prioritized for research", color: "orange"},
    { name: "In-Progress", description: "Features currently being developed", color: "purple"},
    { name: "Live", description: "Released features", color: "blue"},
  ];

  const filteredFeedback = inProgress.filter((feedback) => feedback.status === activeTab.toLowerCase())

  return (
    <div>
        <RoadMapTabs activeTab={activeTab} setActiveTab={setActiveTab} tasks={inProgress} />
        <div className="p-6">
            <h1 className="text-md tracking-tighter font-bold">{activeTab} ({inProgress.reduce((acc, curr) => {curr.status === activeTab.toLowerCase() && acc++; return acc}, 0)})</h1>
            <p className="text-sm text-greyBlue">{ statuses.find(status => status.name === activeTab).description}</p>
            <div className="space-y-6 mt-6">
            {
                filteredFeedback.map((feedback, i) => (
                    <RoadMapCard feedback={feedback} key={i} color={statuses.find(status => status.name === activeTab).color}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}
export default MobileRoadMap
