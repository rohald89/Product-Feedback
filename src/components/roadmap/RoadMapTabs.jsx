const RoadMapTabs = ({activeTab, setActiveTab, tasks}) => {
    const statuses = [
        { name: "Planned", color: "mainOrange" },
        { name: "In-Progress", color: "mainPurple" },
        { name: "Live", color: "mainBlue" },
      ];
    console.log(tasks)

  return (
    <div className="grid grid-cols-3">
        {
            statuses.map(({name, color}) => (
                <button
                    key={name}
                    className={`capitalize ${activeTab === name ? `border-${color}` : "opacity-40 border-transparent"} text-sm font-bold border-b-4 py-5`}
                >
                    {name} ({tasks.reduce((acc, curr) => {curr.status === name.toLowerCase() && acc++; return acc}, 0)})
                </button>
            ))
        }
    </div>
  )
}
export default RoadMapTabs
