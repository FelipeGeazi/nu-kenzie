import Card from "../Card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={transaction.newDescription} />
      ))}
    </ul>
  );
}

export default List;
