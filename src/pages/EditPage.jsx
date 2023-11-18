import { Link } from "react-router-dom";

function EditPage() {
  return (
    <div className="editWrapper">
      <h1>Edição</h1>
      <div className="editContainer">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">
              Tipo de adição
            </label>
          </div>
          <select
            className="custom-select editSelectInputs"
            id="inputGroupSelect01"
          >
            <option selected>Selecione</option>
            <option value="1">Entrada</option>
            <option value="2">Saída</option>
          </select>
        </div>
        <div className="editInputs">
          <label>
            Valor de Entrada ou Saída
            <input type="text"></input>
          </label>
          <label>
            Descrição Entrada ou Saída
            <input type="text"></input>
          </label>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">
              Categoria de gastos
            </label>
          </div>
          <select
            className="custom-select editSelectInputs"
            id="inputGroupSelect01"
          >
            <option selected>Selecione</option>
            <option value="1">Farmácia</option>
            <option value="2">Uber</option>
            <option value="3">Alimentação</option>
          </select>
        </div>
        <Link to={"/EditOrAddCategoryPage"}>
          <button className="editAddButton btn-darkeblue" type="submit">
            Adicionar ou alterar categorias
          </button>
        </Link>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Gasto Recorrente
          </label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Pago
          </label>
        </div>
        <div className="editButtons">
          <button className="btn-darkeblue" type="submit">
            Salvar
          </button>
          <button className="btn-darkeblue" type="submit">
            Cancelar
          </button>
        </div>
        <Link to={"/"}>
          <h3>Voltar</h3>
        </Link>
      </div>
    </div>
  );
}
export default EditPage;
