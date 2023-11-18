import { Link } from "react-router-dom";

function EditCategory() {
  return (
    <div className="addCategory-containerMax">
      <h2>Edição categoria</h2>
      <div className="addCategory-container">
        <div className="editInputs">
          <label>Alterar categoria</label>
          <input placeholder="Ex.:mercado,transporte,etc" type="text"></input>
        </div>
        <Link to={"/EditOrAddCategoryPage"}>
          <h3>Voltar</h3>
        </Link>
      </div>
    </div>
  );
}
export default EditCategory;
