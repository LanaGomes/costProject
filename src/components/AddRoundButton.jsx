import buttonIcon from "../images/buttonRound4.png";
import { Link } from "react-router-dom";

function RoundButton({ kindOfAddition }) {
  return (
    <nav className="ButtonContainer">
      <label>{`Add ${kindOfAddition}`}</label>
      <Link to={"/editpage"}>
        <img src={buttonIcon} alt="roundButton"></img>
      </Link>
    </nav>
  );
}
export default RoundButton;
