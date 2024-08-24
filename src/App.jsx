import React, { useState, useEffect } from "react";
import db from "./database/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Secao from "./components/Secao";
import Cartao from "./components/Cartao";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import Formulario2 from "./components/Formulario2";

import './App.css';

const App = () => {
  const [servicos, setServicos] = useState([]);

  const campos = [
    {
      id: "nome",
      tipo: "text",
      nome: "Nome:"
    },
    {
      id: "descricao",
      tipo: "text",
      nome: "Descrição:"
    },
    {
      id: "url",
      tipo: "text",
      nome: "Url:"
    }
  ];
  // AQUI MOSTRA NA TELA  
  const lerBanco = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "servicos"));
      const servicosData = querySnapshot.docs.map((doc) => doc.data());
      setServicos(servicosData);
    } catch (error) {
      console.error("Erro ao ler banco de dados:", error);
    }
  };

  useEffect(() => {
    lerBanco();
  }, []);



  const campos2 = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    }, //Fim do OBJETO
    {
      nome: "Email Válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Cidade",
      id: "cidade",
      tipo: "text",
    },
    {
      nome: "Estado",
      id: "estado",
      tipo: "text",
    },
    {
      nome: "Telefone de Contato",
      id: "fone",
      tipo: "text",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    },
  ];

  const campoServico = [

  
    {
      nome: "Titulo",
      id: "titulo",
      tipo: "text",
    },
    {
      nome: "Descricao",
      id: "descricao",
      tipo: "text",
    },
    {
      nome: "Imagem",
      id: "imagem",
      tipo: "text",
    },
  ];
  
  return (
    <>
      <Cabecalho />
      <Menu />

      <Secao>
        <img src="src/assets/topo.jpg" alt="Topo" />
      </Secao>

      <Secao>
        <Titulo texto="Cadastrar Serviço" />
        <Formulario campos={campos} />
        <button onClick={lerBanco}>Ler dados do Banco </button>
      </Secao>
      <Secao>

      <Titulo texto="Contato" />
      <Formulario2 campos2={campos2} />
      <button onClick={lerBanco}>Ler dados do Banco </button>
      </Secao>
      
      <Secao>
        <Titulo texto="Serviços" />
        <div className="servicos">
        {servicos.map((servico, index) => (
          <Cartao
            key={index}
            titulo={servico.nome}
            descricao={servico.descricao}
            imagem={`src/img/${servico.url}.jpeg` }
          />
        ))}
        </div>
      </Secao>
    </>




  );
};

export default App;