import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RoadMapStats = () => {
  const { statuses, allFeedback } = useSelector((state) => state.feedback);

  return (
    <section className="p-6 bg-white rounded-[10px]">
        <div className="flex justify-between">
            <h2 className="text-md text-darkBlue font-bold mb-6">Roadmap</h2>
            <Link className="text-mainBlue hover:underline" to="/roadmap">View</Link>
        </div>
        <div className="space-y-2 text-greyBlue">
            {
                statuses.map((status, i) =>  (
                    <div key={i} className="flex items-center justify-between">
                        <div className={`h-2 w-2 rounded-full bg-${status.color}`}></div>
                        <p className="flex-grow ml-4 text-body-lg">{status.name}</p>
                        <p>
                            {allFeedback.reduce((acc, curr) => {
                                if (status.name.toLowerCase() === curr.status) {
                                acc++;
                                }
                                return acc;
                            }, 0)}
                        </p>
                    </div>
                    )
                )
            }

        </div>
    </section>
  )
}
export default RoadMapStats
