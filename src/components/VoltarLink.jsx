import { Link } from "react-router-dom";

function VoltarLink({ page }) {
  return (
    <Link to={page}>
      <h3 className="linkVoltar">Voltar</h3>
    </Link>
  );
}
export default VoltarLink;
