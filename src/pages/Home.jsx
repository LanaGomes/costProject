import Header from "../components/Header";
import Month from "../components/Month";
import SaldoMensal from "../components/SaldoMensal";
import AddSection from "../components/AddSection";

function Home() {
  return (
    <div>
      <Header />
      <Month />
      <SaldoMensal />
      <AddSection />
    </div>
  );
}
export default Home;
