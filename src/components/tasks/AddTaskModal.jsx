import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";
import Modal from "../Ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(addTask(data));
    handleCancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="deadline" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="assign" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assign"
            {...register("assign")}
          >
            <option value="Alex">Alex</option>
            <option value="John">John</option>
            <option value="Sona">Sona</option>
            <option value="Drake">Drake</option>
            <option value="Evan">Evan</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="priority" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              high
            </option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={handleCancel}
            className="btn btn-danger"
            type="button"
          >
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
