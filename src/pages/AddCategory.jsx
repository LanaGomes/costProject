import { Link } from "react-router-dom";

Link;
function AddCategory() {
  return (
    <div className="addCategory-containerMax">
      <h2>Adicionar categoria</h2>
      <div className="addCategory-container">
        <div className="editInputs">
          <label>Nova categoria</label>
          <input placeholder="Ex.:mercado,transporte,etc" type="text"></input>
        </div>
        <Link to={"/EditOrAddCategoryPage"}>
          <h3>Voltar</h3>
        </Link>
      </div>
    </div>
  );
}
export default AddCategory;
