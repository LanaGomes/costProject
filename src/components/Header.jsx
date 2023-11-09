import "../index.css";
import logo from "../images/logo.png";
import menuSanduiche from "../images/menu1.png";

function Header() {
  return (
    <header className="navBar">
      <img className="navBarLogos" src={logo} alt="LogoMaoSegurandoMoeda" />
      <img className="navBarLogos" src={menuSanduiche} alt="MenuSanduiche" />
    </header>
  );
}
export default Header;
