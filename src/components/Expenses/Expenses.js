import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  let expensesArray = Object.values(props.expenses);

  const [filteredYear, setFilteredYear] = useState("2021");

  const handleSelectedValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expensesArray.filter(
    (element) =>
      new Date(element.date).getFullYear() === Number(filteredYear) ||
      filteredYear === "Select All"
  );

  const removeExpense = (identifier) => {
    console.log("delete the from Expenses:", identifier);
    props.deleteSelectedItem(identifier);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleSelectedValue}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} removeItem={removeExpense} />

        {/* {expenseContent} */}

        {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((filteredElement) => {
          return (
            <ExpenseItem
              title={filteredElement.title}
              amount={filteredElement.amount}
              date={filteredElement.date}
              key={filteredElement.id}
            />
          );
        })} */}
      </Card>
    </li>
  );
};

export default Expenses;
