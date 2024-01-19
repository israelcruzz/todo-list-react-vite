import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleDeletionTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleDeletionTask={handleDeletionTask}
        />
      ))}
    </>
  );
};

export default Tasks;
