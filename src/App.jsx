import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
//import Card from "./components/Card";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [listFiltradas, setListFiltradas] = useState([]);

  function ListFilter(type) {
    if (type === "todos") {
      return setListFiltradas(listTransactions);
    }
    const filtrados = listTransactions.filter((item) => {
      return item.newType === type;
    });
    return setListFiltradas(filtrados);
  }

  return (
    <>
      <header>
        <img className="logo" src="./public/Nu_Kenzie.png" alt="logo" />

        <button className="btnInicio">Inicio</button>
      </header>
      <main>
        <aside>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            listFiltradas={listFiltradas}
            setListFiltradas={setListFiltradas}
          />
          <TotalMoney listTransactions={listTransactions} />
        </aside>
        <section className="cards">
          <nav>
            <h2 className="resumo">Resumo Financeiro</h2>
            <div className="buttons">
              <button className="btnFilter" onClick={() => ListFilter("todos")}>
                Todas
              </button>
              <button
                onClick={() => ListFilter("entrada")}
                className="btnFilter"
              >
                Entradas
              </button>
              <button className="btnFilter" onClick={() => ListFilter("saida")}>
                Despesas
              </button>
            </div>
          </nav>
          <List listFiltradas={listFiltradas} />
        </section>
      </main>
    </>
  );
}

export default App;
