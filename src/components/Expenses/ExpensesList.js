import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
  }
  const deleteExpense = (identifier) => {
    // console.log("delete the from Expense List :", identifier);
    props.removeItem(identifier);
  };

  return (
    <ul className="expenses-list">
      {props.items.map((filteredElement) => (
        <ExpenseItem
          title={filteredElement.title}
          amount={filteredElement.amount}
          date={new Date(filteredElement.date)}
          key={filteredElement.id}
          id={filteredElement.id}
          deleteExpense={deleteExpense}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
