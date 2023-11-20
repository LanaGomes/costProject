import VoltarLink from "../components/VoltarLink";

function EditCategory() {
  return (
    <div className="addCategory-containerMax">
      <h2>Edição categoria</h2>
      <div className="addCategory-container">
        <div className="editInputs">
          <label>Alterar categoria</label>
          <input placeholder="Ex.:mercado,transporte,etc" type="text"></input>
        </div>
        <VoltarLink page="/EditOrAddCategoryPage" />
      </div>
    </div>
  );
}
export default EditCategory;
