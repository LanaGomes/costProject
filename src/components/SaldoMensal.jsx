import { Link } from "react-router-dom";
import Saldo from "./Saldo";

function SaldoMensal() {
  return (
    <main className="saldoContainer">
      <div className="saldoContainerSubDiv">
        <Saldo />
        <p>08/11/2023</p>
      </div>
      <Link to={"/extrato"}>
        <h3>Extrato</h3>
      </Link>
    </main>
  );
}
export default SaldoMensal;
