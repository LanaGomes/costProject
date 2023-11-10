import AddRoundButton from "../components/AddRoundButton";

function AddSection() {
  return (
    <section className="AddRoundButtonContainer">
      <AddRoundButton kindOfAddition="Entrada" />
      <AddRoundButton kindOfAddition="Saída" />
    </section>
  );
}
export default AddSection;
