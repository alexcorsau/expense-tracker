import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const formHidden = () => {
    setShowForm(false);
  };

  const formVisible = () => {
    setShowForm(true);
    console.log("showForm:", showForm);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={formVisible}>
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          hide={formHidden}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}

      {/* {showForm ? (
        <ExpenseForm
          hide={formHidden}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button type="button" onClick={formVisible}>
          Add New Expense
        </button>
      )} */}
    </div>
  );
};

export default NewExpense;
