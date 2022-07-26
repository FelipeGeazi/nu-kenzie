import "./style.css";
function TotalMoney({ listTransactions }) {
  const lista = listTransactions.reduce(
    (previous, current) =>
      current.newType === "entrada"
        ? previous + current.newValue
        : previous - current.newValue,

    0
  );

  return (
    <div className="divSoma">
      <div className="divValor">
        <h3 className="textValor">Valor total:</h3>
        <h3 className="valor">$ {lista},00</h3>
      </div>
      <p className="descSaldo">O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
