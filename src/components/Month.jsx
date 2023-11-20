import setaEsquerda from "../images/setaEsquerda.png";
import setaDireita from "../images/setaDireita.png";
import moment from "moment";
import { useState } from "react";

function Month() {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const handleMonthChange = (operation) => {
    setCurrentMonth((prevMonth) =>
      operation === "next"
        ? prevMonth.clone().add(1, "month")
        : prevMonth.clone().subtract(1, "month")
    );
  };

  const formattedMonth = currentMonth.format("MMMM YYYY");

  return (
    <section
      className="monthSection"
      onClick={(e) => {
        if (e.target.className.includes("setaEsquerda")) {
          handleMonthChange("previous");
        } else if (e.target.className.includes("setaDireita")) {
          handleMonthChange("next");
        }
      }}
    >
      <img
        className="setaEsquerda"
        src={setaEsquerda}
        alt="iconeSetaParaEsquerda"
      ></img>
      <h1>{formattedMonth}</h1>
      <img
        className="setaDireita"
        src={setaDireita}
        alt="iconeSetaParadireita"
      ></img>
    </section>
  );
}
export default Month;
