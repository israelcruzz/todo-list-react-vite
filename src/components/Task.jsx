import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Task({ task, handleTaskClick, handleDeletionTask }) {
  const navigate = useNavigate();

  const handleDetailsView = () => {
    navigate(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="delete-task"
          onClick={() => handleDeletionTask(task.id)}
        >
          <CgClose />
        </button>

        <button className="details-task" onClick={handleDetailsView}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
}
