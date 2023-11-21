import Header from "../components/Header";
import Month from "../components/Month";
import SaldoMensal from "../components/SaldoMensal";
import AddSection from "../components/AddSection";

function Home() {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <div className="homeContainerChild">
          <Month />
          <SaldoMensal />
          <AddSection />
        </div>
      </div>
    </div>
  );
}
export default Home;
