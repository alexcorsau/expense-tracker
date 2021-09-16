import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState(
    JSON.parse(window.localStorage.getItem("expenses")) || []
  );

  const addExpenseHandler = (expense) => {
    console.log("InApp.js");
    setExpenses((expenses) => {
      return [...expenses, expense];
    });
    console.log(expenses);
  };

  useEffect(() => {
    window.localStorage.setItem("expenses", JSON.stringify(expenses));
    console.log("localStorage:", localStorage.expenses);
    console.log("expenses: ", expenses);
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
