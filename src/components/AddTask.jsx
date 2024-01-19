import "./AddTask.css";
import { useState } from "react";
import Button from "./Button";

const AddTask = ({ handleAddNewTask }) => {
  const [inputData, setInput] = useState("");

  const handleInputValue = (e) => {
    setInput(e.target.value);
  };

  const handleNewTask = () => {
    inputData === "" ? setInput("") : handleAddNewTask(inputData);
    setInput("");
  };

  return (
    <div className="add-task-container">
      <input
        className="add-task-input"
        value={inputData}
        type="text"
        onChange={handleInputValue}
      />
      <div className="add-button-task-container">
        <Button onClick={handleNewTask}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
