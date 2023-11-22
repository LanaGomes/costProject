import { Link } from "react-router-dom";
import Saldo from "./Saldo";
import moment from "moment";

function SaldoMensal() {
  const dateSaldo = moment().format("L");

  return (
    <main className="saldoContainer">
      <div className="saldoContainerSubDiv">
        <Saldo />
        <p>{dateSaldo}</p>
      </div>
      <Link to={"/extrato"}>
        <h3 className="layoutLink">Extrato</h3>
      </Link>
    </main>
  );
}
export default SaldoMensal;
