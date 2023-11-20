import { Link } from "react-router-dom";
import editLogo from "../images/editIcon.png";
import xLogo from "../images/X2.png";
import VoltarLink from "../components/VoltarLink";

Link;
function EditOrAddCategoryPage() {
  return (
    <>
      <main className="EditOrAddCategoryPage-Container">
        <h2>Editar Categorias</h2>
        <section>
          <h4>Categorias cadastradas</h4>
          <ul className="registeredCategory-Container">
            <li className="registeredCategory">
              <p>Fármacia</p>
              <Link to={"/editpage"}>
                <img src={editLogo} alt="editIcon"></img>
              </Link>
              <Link to={"/editpage"}>
                <img src={xLogo} alt="editIcon"></img>
              </Link>
            </li>
            <li className="registeredCategory">
              <p>Fármacia</p>
              <Link to={"/editcategory"}>
                <img src={editLogo} alt="editIcon"></img>
              </Link>
              <Link to={"/editcategory"}>
                <img src={xLogo} alt="editIcon"></img>
              </Link>
            </li>
            <li className="registeredCategory">
              <p>Fármacia</p>
              <Link to={"/editcategory"}>
                <img src={editLogo} alt="editIcon"></img>
              </Link>
              <Link to={"/editcategory"}>
                <img src={xLogo} alt="editIcon"></img>
              </Link>
            </li>
          </ul>
        </section>
        <Link to={"/addcategory"}>
          <button className="btn-darkeblue"> Adicionar nova categoria </button>
        </Link>

        <VoltarLink page="/editpage" />
      </main>
    </>
  );
}
export default EditOrAddCategoryPage;
