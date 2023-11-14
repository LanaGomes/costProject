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
            <option id="editarCategorias" value="3">
              Add ou editar categorias
            </option>
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
          />
          Gasto recorrente
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
          />
          Pago
        </div>
        <div className="editButtons">
          <button className="editButton" type="submit">
            Salvar
          </button>
          <button className="editButton" type="submit">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditPage;
