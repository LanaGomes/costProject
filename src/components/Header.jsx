import "../index.css";
import logo from "../images/logo.png";
import menuSanduiche from "../images/menu1.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navBar">
      <Link to={"/"}>
        <img
          className="navBarLogos logo"
          src={logo}
          alt="LogoMaoSegurandoMoeda"
        />
      </Link>
      <img
        className="navBarLogos menuSanduich"
        src={menuSanduiche}
        alt="MenuSanduiche"
      />
    </header>
  );
}
export default Header;
