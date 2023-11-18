import { Link } from "react-router-dom";
import editLogo from "../images/editIcon.png";
import xLogo from "../images/X2.png";

Link;
function EditOrAddCategoryPage() {
  return (
    <>
      <main className="EditOrAddCategoryPage-Container">
        <h2>Editar Categorias</h2>
        <section className="registeredCategory-Container">
          <h4>Categorias cadastradas</h4>
          <div className="registeredCategory">
            <p>Fármacia</p>
            <Link to={"/editpage"}>
              <img src={editLogo} alt="editIcon"></img>
            </Link>
            <Link to={"/editpage"}>
              <img src={xLogo} alt="editIcon"></img>
            </Link>
          </div>
          <div className="registeredCategory">
            <p>Fármacia</p>
            <Link to={"/editcategory"}>
              <img src={editLogo} alt="editIcon"></img>
            </Link>
            <Link to={"/editcategory"}>
              <img src={xLogo} alt="editIcon"></img>
            </Link>
          </div>
          <div className="registeredCategory">
            <p>Fármacia</p>
            <Link to={"/editcategory"}>
              <img src={editLogo} alt="editIcon"></img>
            </Link>
            <Link to={"/editcategory"}>
              <img src={xLogo} alt="editIcon"></img>
            </Link>
          </div>
        </section>
        <Link to={"/addcategory"}>
          <button className="btn-darkeblue"> Adicionar nova categoria </button>
        </Link>

        <Link to={"/editpage"}>
          <h3>Voltar</h3>
        </Link>
      </main>
    </>
  );
}
export default EditOrAddCategoryPage;
