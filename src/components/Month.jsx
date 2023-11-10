import setaEsquerda from "../images/setaEsquerda.png";
import setaDireita from "../images/setaDireita.png";

function Month() {
  return (
    <section className="monthSection">
      <img src={setaEsquerda} alt="iconeSetaParaEsquerda"></img>
      <h1>Month</h1>
      <img src={setaDireita} alt="iconeSetaParadireita"></img>
    </section>
  );
}
export default Month;
