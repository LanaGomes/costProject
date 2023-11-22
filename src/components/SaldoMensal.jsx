import { Link } from "react-router-dom";
import Saldo from "./Saldo";

function SaldoMensal() {
  return (
    <main className="saldoContainer">
      <div className="saldoContainerSubDiv">
        <Saldo />
        <p>08/11/2023</p> {/*atualizar data moment*/}
      </div>
      <Link to={"/extrato"}>
        <h3 className="layoutLink">Extrato</h3>
      </Link>
    </main>
  );
}
export default SaldoMensal;
