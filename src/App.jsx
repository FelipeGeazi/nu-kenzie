import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function filterEntradas() {
    const entrada = listTransactions.filter((item) => {
      return item.newType === "entrada";
    });

    List({ entrada });
  }
  return (
    <>
      <header>
        <img className="logo" src="../public/Nu_Kenzie.png" />
        <button className="btnInicio">Inicio</button>
      </header>
      <main>
        <aside>
          <Form
            className="formulario"
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </aside>
        <section className="cards">
          <nav>
            <h2 className="resumo">Resumo Financeiro</h2>
            <div className="buttons">
              <button className="btnFilter">Todas</button>
              <button onClick={() => filterEntradas} className="btnFilter">
                Entradas
              </button>
              <button className="btnFilter">Despesas</button>
            </div>
          </nav>
          <List listTransactions={listTransactions} />
        </section>
      </main>
    </>
  );
}

export default App;
