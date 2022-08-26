const RoadMapTabs = ({activeTab, setActiveTab, tasks}) => {
    const statuses = [
        { name: "Planned", color: "orange" },
        { name: "In-Progress", color: "purple" },
        { name: "Live", color: "blue" },
      ];

  return (
    <div className="grid grid-cols-3 border-b-2 border-[#8C92B3] border-opacity-25">
        {
            statuses.map(({name, color}) => (
                <button
                    key={name}
                    className={`capitalize text-sm font-bold border-b-4 py-5 ${activeTab !== name && "opacity-40 border-b-transparent"} ${color === "orange" ? "border-mainOrange" : color === "purple" ? "border-mainPurple" : "border-lightBlue"}`}
                    onClick={() => setActiveTab(name)}
                >
                    {name} ({tasks.reduce((acc, curr) => {curr.status.toLowerCase() === name.toLowerCase() && acc++; return acc}, 0)})
                </button>
            ))
        }
    </div>
  )
}
export default RoadMapTabs
