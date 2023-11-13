import { Link } from "react-router-dom";

function SaldoMensal() {
  return (
    <main className="saldoContainer">
      <div className="saldoContainerSubDiv">
        <h2>Saldo: - R$30,00</h2>
        <p>08/11/2023</p>
      </div>
      <Link to={"/extrato"}>Extrato</Link>
    </main>
  );
}
export default SaldoMensal;
