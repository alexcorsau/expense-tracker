import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import DeletePNG from "./delete.png";

const ExpenseItem = (props) => {
  // let uniqueId = props.id;
  const removeExpense = () => {
    console.log("Pressed Delete from: ", props.title);
    props.deleteExpense(props.id);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">$ {props.amount}</div>
        <button className="delete-expense-button" onClick={removeExpense}>
          <img src={DeletePNG} alt="R" />
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
