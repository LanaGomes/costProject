import Header from "../components/Header";
import Saldo from "../components/Saldo";
import Month from "../components/Month";
import Entradas from "../components/Entradas";
import Saidas from "../components/Saidas";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import VoltarLink from "../components/VoltarLink";

function Extract(page) {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    async function getExpenses() {
      const response = await fetch("http://localhost:8080/expenses");
      const data = await response.json();

      setExpenses(data.expenses);
      setTotalExpenses(
        data.expenses.reduce(
          (accumulator, currentValue) => accumulator + currentValue.Amount,
          0
        )
      );
    }

    async function getIncomes() {
      const response = await fetch("http://localhost:8080/incomes");
      const data = await response.json();

      setIncomes(data.incomes);
      setTotalIncomes(
        data.incomes.reduce(
          (accumulator, currentValue) => accumulator + currentValue.Amount,
          0
        )
      );
    }

    getExpenses();
    getIncomes();
  }, []);
  return (
    <>
      <Header />
      <div className="extractMonth">
        <Month />
      </div>

      <div className="extractSaldo">
        <Saldo />
      </div>

      <main className="entradasESaidasContainer">
        <section className="extractEntradas layoutEntradasESaídas">
          <header>{`Entradas: + ${totalIncomes ?? "carregando"}`}</header>
          {incomes.length > 0
            ? incomes.map((income) => {
                return (
                  <Entradas
                    key={income.ID}
                    name={income.Name}
                    amount={income.Amount}
                  />
                );
              })
            : "carregando"}
        </section>
        <section className="extractSaidas layoutEntradasESaídas">
          <header>{`Saídas: - ${totalExpenses ?? "carregando"}`}</header>
          {expenses.length > 0 ? (
            expenses.map((expense) => {
              return (
                <Saidas
                  key={expense.ID}
                  name={expense.Name}
                  amount={expense.Amount}
                />
              );
            })
          ) : (
            <h1>{"carregando"}</h1>
          )}
        </section>
        <VoltarLink page="/" />
      </main>
    </>
  );
}
export default Extract;
