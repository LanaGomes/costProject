import Header from "../components/Header";
import Saldo from "../components/Saldo";
import Month from "../components/Month";
import Entradas from "../components/Entradas";
import Saidas from "../components/Saidas";
import { Link } from "react-router-dom";

function Extract() {
  return (
    <>
      <Header />
      <div className="extractMonth">
        <Month />
      </div>

      <div className="extractSaldo">
        <Saldo />
      </div>

      <main className="entradasESaidasContainer">
        <section className="extractEntradas layotEntradasESaídas">
          <header>{`Entradas: + 5800`}</header>
          <Entradas />
        </section>
        <section className="extractSaidas layotEntradasESaídas">
          <header>{`Saídas: - 5809`}</header>
          <Saidas />
          <Saidas />
          <Saidas />
        </section>
        <Link to={"/"}>
          <h2>Voltar</h2>
        </Link>
      </main>
    </>
  );
}
export default Extract;
