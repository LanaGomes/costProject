import VoltarLink from "../components/VoltarLink";

function AddCategory() {
  return (
    <div className="addCategory-containerMax">
      <h2>Adicionar categoria</h2>
      <div className="addCategory-container">
        <div className="editInputs">
          <label>Nova categoria</label>
          <input placeholder="Ex.:mercado,transporte,etc" type="text"></input>
        </div>

        <VoltarLink page="/EditOrAddCategoryPage" />
      </div>
    </div>
  );
}
export default AddCategory;
