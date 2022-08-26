import { useSelector } from "react-redux";
import RoadMapCard from "./RoadMapCard";

const RoadMap = () => {
    const { allFeedback } = useSelector((state) => state.feedback);

    const inProgress = allFeedback.filter((item) => item.status !== "suggestion");

    const statuses = [
      { name: "Planned", description: "Ideas prioritized for research", color: "orange"},
      { name: "In-Progress", description: "Features currently being developed", color: "purple"},
      { name: "Live", description: "Released features", color: "blue"},
    ];

  return (
    <div className="grid grid-cols-3 gap-4">
        {
            statuses.map((status, i) => {
                const filteredFeedback = inProgress.filter((feedback) => feedback.status === status.name.toLowerCase());
                return (

            <div className="" key={i}>
                <h1 className="text-md tracking-tighter font-bold">{status.name} ({filteredFeedback.length})</h1>
                <p className="text-sm text-greyBlue">{ status.description}</p>
                <div className="space-y-6 mt-6">
                    {
                        filteredFeedback.map((feedback, i) => (
                            <RoadMapCard feedback={feedback} key={i} color={status.color}/>
                        ))
                    }
                </div>
            </div>
            )})
        }
    </div>
  )
}
export default RoadMap
