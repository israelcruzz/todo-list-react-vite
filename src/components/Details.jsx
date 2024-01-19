import Button from "./Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();

  const backPageNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="task-details-container">
      <h2>{params.taskTitle}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis,
        eaque accusamus culpa aut mollitia!
      </p>
      <Button onClick={backPageNavigate} className="back-button-container">
        Voltar
      </Button>
    </div>
  );
};

export default Details;
