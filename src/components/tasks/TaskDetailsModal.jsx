import { useSelector } from "react-redux";
import Modal from "../Ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { userTasks } = useSelector((state) => state.tasksSlice);
  const task = userTasks.find((item) => item.id === id);
  console.log(task);
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.name}>
        <div className="border-t-2 border-sky-600 mt-2 pt-3 flex flex-col gap-3">
          <p>{task?.description}</p>
          <div className=" flex items-center justify-between">
            <p>
              <span className="font-medium">Assigned to: </span>
              {task?.assign}
            </p>
            <p>
              <span className="font-medium">Deadline: </span>
              {task?.date}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaskDetailsModal;
