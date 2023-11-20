import { Link } from "react-router-dom";
import VoltarLink from "../components/VoltarLink";

function EditPage() {
  return (
    <div className="editWrapper">
      <h1>Edição</h1>
      <div className="editContainer">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
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
            <label className="input-group-text" htmlFor="inputGroupSelect01">
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
          <label class="form-check-label" htmlFor="exampleCheck1">
            Gasto Recorrente
          </label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" htmlFor="exampleCheck1">
            Pago
          </label>
        </div>
        <div className="editButtonsContainer">
          <button className="btn-darkeblue" type="submit">
            Salvar
          </button>
          <button className="btn-darkeblue" type="submit">
            Cancelar
          </button>
        </div>
        <VoltarLink page="/" />
      </div>
    </div>
  );
}
export default EditPage;
