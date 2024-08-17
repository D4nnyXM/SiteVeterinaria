import React from "react";
import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Secao from "./components/Secao";
import Cartao from "./components/Cartao";
import Titulo from "./components/Titulo";

import Formulario from "./components/Formulario";

import { collection, getDocs } from "firebase/firestore";
import db from "./database/firebaseConfig";

import "./App.css";




const App = () => {
  const campos = [
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

  //Busca todos os documentos da colecao 
  const lerBanco = async() => {  
    //Ler dados do banco de dados   para cada item dentro do Array vamos executar um console.log /* comentarios = [ <<-- colletion { nome: ana, email: tata@gma}]
    
     const comentarios = await getDocs(collection(db, "comentarios"));

    comentarios.forEach( (documento)=> {
      console.log(documento.data());
    });

  };

  return (
    <div>
      <Cabecalho />
      <Menu />
      <Secao>
        <img src="src/assets/topo.jpg"></img>
      </Secao>

      <Secao>
        <Titulo texto="Serviços" />
        <Cartao
          descricao="Um texto descritivo"
          imagem="#"
          titulo="Um LOGO BEM GRANDE"
        />
        <Cartao descricao="LOREN IPSUN" imagem="#" titulo="Um TITULO" />
      </Secao>

      <Secao>
        <Titulo texto="Contato" />

        <Formulario campos={campos} />
        <button onClick={lerBanco}> Ler dados do banco </button>
      </Secao>
    </div>
  );
};
export default App;
