import buttonIcon from "../images/buttonRound4.png";

function RoundButton({ kindOfAddition }) {
  return (
    <nav className="ButtonContainer">
      <label>{`Add ${kindOfAddition}`}</label>
      <a>
        <img src={buttonIcon} alt="roundButton"></img>
      </a>
    </nav>
  );
}
export default RoundButton;
