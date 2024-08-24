import { useState } from "react";
import db from "../database/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import "./Formulario.css";

function Formulario({ campos }) {
  const [dados, setDados] = useState({});

  const alteraDados = (e) => {
    const valor = e.target.value;
    const chave = e.target.id;
    setDados({ ...dados, [chave]: valor });
  };

  const salvarDados = async (e) => {
    e.preventDefault();

    // aqui faz o alerta do cadastro com sucesso
      try {
      await addDoc(collection(db, "servicos"), dados);
      alert("Serviço cadastrado com sucesso!");
      setDados({});
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Ocorreu um erro ao cadastrar o serviço. Tente novamente.");
    }
  };

  return (
    <form id="form_contato" onSubmit={salvarDados}>
      {campos.map((item) => (
        <div className="contato" key={item.id}>
          <label htmlFor={item.id}>{item.nome}</label>
          <input
            id={item.id}
            type={item.tipo}
            value={dados[item.id] || ""}
            onChange={alteraDados}
          />
        </div>
      ))}

      <button type="submit">Enviar informação</button>
    </form>
  );
}

export default Formulario;