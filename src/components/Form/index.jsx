import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  console.log(listTransactions);

  const [newValue, setNewValue] = useState(0);
  const [newDescription, setNewDescription] = useState("");
  const [newType, setNewType] = useState("entrada");

  function handleForm() {
    const transation = {
      newValue: Number(newValue),
      newDescription,
      newType,
    };
    if (newDescription !== "" && newDescription !== " " && newValue !== 0) {
      setListTransactions([transation, ...listTransactions]);
    } else {
      alert("O valor ou a descrição não foi inseridos");
    }
  }

  return (
    <form className="form">
      <h3>Descrição</h3>
      <input
        placeholder="Digite aqui sua descrição"
        className="inputDescrition"
        type="text"
        value={newDescription}
        onChange={(event) => setNewDescription(event.target.value)}
      />
      <h4>Ex: compra de roupa</h4>

      <div className="valores">
        <div>
          <h3 className="legenda">Valor</h3>
          <input
            className="inputValor"
            placeholder="Digite aqui sua descrição"
            type="number"
            value={newValue}
            onChange={(event) => setNewValue(event.target.value)}
          />
        </div>

        <div>
          <h3 className="legenda"> Tipo de Valor</h3>
          <select
            className="select"
            onChange={(event) => setNewType(event.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>

      <button
        className="btnCadastrar"
        type="button"
        onClick={() => handleForm()}
      >
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
