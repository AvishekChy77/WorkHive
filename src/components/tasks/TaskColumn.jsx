import TaskCard from "./TaskCard"


const TaskColumn = ({title, tasks}) => {
    return (
        <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>{title}</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                    {tasks.length}
                </p>
            </div>
            <div className="space-y-3">
                {tasks.map((item) => (
                    <TaskCard key={item.id} task={item} />
                ))}
            </div>
        </div>
    )
}

export default TaskColumn