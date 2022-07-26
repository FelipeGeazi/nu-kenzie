import "./style.css";
function Card({ transaction, index }) {
  return transaction.newType === "entrada" ? (
    <li className="cardVerde" key={index}>
      <div className="divDescricao">
        <h2 className="descricao">{transaction.newDescription}</h2>
        <h4 className="tipo">{transaction.newType}</h4>
      </div>
      <h3 className="valor">R$ {transaction.newValue},00</h3>
      <button className="btnExcluir">X</button>
    </li>
  ) : (
    <li className="cardCinza" key={index}>
      {" "}
      <div className="divDescricao">
        <h2 className="descricao">{transaction.newDescription}</h2>
        <h4 className="tipo">{transaction.newType}</h4>
      </div>
      <h3 className="valor">R$ {transaction.newValue},00</h3>
      <button className="btnExcluir">X</button>
    </li>
  );
}

export default Card;
