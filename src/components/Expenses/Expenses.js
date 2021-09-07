import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  let expensesArray = Object.values(props.expenses);

  const [filteredYear, setFilteredYear] = useState("2021");

  const handleSelectedValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expensesArray.filter(
    (element) =>
      element.date.getFullYear() === Number(filteredYear) ||
      filteredYear === "Select All"
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleSelectedValue}
        />
        <ExpensesList items={filteredExpenses} />

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