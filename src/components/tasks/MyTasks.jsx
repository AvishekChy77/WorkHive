import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserTasks,
  updateStatus,
} from "../../redux/features/tasks/tasksSlice";
import TaskDetailsModal from "./TaskDetailsModal";

const MyTasks = () => {
  const [taskId, setTaskId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { tasks, userTasks } = useSelector((state) => state.tasksSlice);
  const { name: userName } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const handleTaskDetails = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(selectUserTasks(userName));
  }, [userName, dispatch, tasks]);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
      <div className=" h-[750px] overflow-auto space-y-3">
        {userTasks.map((task) => (
          <div
            key={task.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{task.name}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleTaskDetails(task.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: task.id, status: "completed" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
