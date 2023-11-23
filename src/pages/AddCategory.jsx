import VoltarLink from "../components/VoltarLink";

function AddCategory() {
  /*const [category, setCategory] = useState('')

  const handleCategoryChange = (e) =>{
    setCategory(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://your-go-backend-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      });

      if (response.ok) {
        console.log("Category added successfully!");
        // You can redirect or perform other actions after a successful request
      } else {
        console.error("Failed to add category");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };*/

  return (
    <div className="addCategory-containerMax">
      <h2>Adicionar categoria</h2>
      <div className="addCategory-container">
        <form>
          <div className="editInputs">
            <label>Nova categoria</label>
            <input placeholder="Ex.:mercado,transporte,etc" type="text"></input>
            <button className="btn-darkeblue" type="submit">
              Adicionar
            </button>
          </div>
        </form>
        <VoltarLink page="/EditOrAddCategoryPage" />
      </div>
    </div>
  );
}
export default AddCategory;
