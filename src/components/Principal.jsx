import React, { useState, useEffect } from "react"; // Importa React e os hooks useState e useEffect
import db from "../database/firebaseConfig"; // Importa a configuração do Firebase
import { collection, getDocs } from "firebase/firestore"; // Importa funções para interagir com o Firestore
import Cabecalho from "./Cabecalho"; // Importa o componente Cabecalho
import Menu from "./Menu"; // Importa o componente Menu
import Secao from "./Secao"; // Importa o componente Secao
import Cartao from "./Cartao"; // Importa o componente Cartao
import Titulo from "./Titulo"; // Importa o componente Titulo
import Formulario from "./Formulario"; // Importa o componente Formulario
import Formulario2 from "./Formulario2"; // Importa o componente Formulario2

import './Principal.css'; // Importa o arquivo de estilos CSS

const Principal = () => { // Define o componente principal App
  const [servicos, setServicos] = useState([]); // Cria um estado chamado 'servicos' e uma função para atualizá-lo
  
  const campos = [ // Define um array de objetos representando os campos do formulário
    {
      id: "nome", // Identificador do campo
      tipo: "text", // Tipo de input do campo
      nome: "Nome:" // Rótulo do campo
    },
    {
      id: "descricao", // Identificador do campo
      tipo: "text", // Tipo de input do campo
      nome: "Descrição:" // Rótulo do campo
    },
    {
      id: "url", // Identificador do campo
      tipo: "text", // Tipo de input do campo
      nome: "Url:" // Rótulo do campo
    }
  ];

  const lerBanco = async () => { // Função assíncrona para ler dados do Firestore
    try {
      const querySnapshot = await getDocs(collection(db, "servicos")); // Obtém documentos da coleção 'servicos' no Firestore
      const servicosData = querySnapshot.docs.map((doc) => doc.data()); // Mapeia os dados dos documentos para um array
      setServicos(servicosData); // Atualiza o estado 'servicos' com os dados obtidos
    } catch (error) {
      console.error("Erro ao ler banco de dados:", error); // Exibe erro no console, caso ocorra
    }
  };

  useEffect(() => { // Hook que executa um efeito colateral
    lerBanco(); // Chama a função para ler os dados do Firestore quando o componente é montado
  }, []); // Array vazio indica que o efeito é executado apenas uma vez

  const campos2 = [ // Define outro array de objetos representando os campos de um segundo formulário
    {
      nome: "Nome completo", // Rótulo do campo
      id: "nome", // Identificador do campo
      tipo: "text", // Tipo de input do campo
    },
    {
      nome: "Email Válido", // Rótulo do campo
      id: "email", // Identificador do campo
      tipo: "email", // Tipo de input do campo
    },
    {
      nome: "Cidade", // Rótulo do campo
      id: "cidade", // Identificador do campo
      tipo: "text", // Tipo de input do campo
    },
    {
      nome: "Estado", // Rótulo do campo
      id: "estado", // Identificador do campo
      tipo: "text", // Tipo de input do campo
    },
    {
      nome: "Telefone de Contato", // Rótulo do campo
      id: "fone", // Identificador do campo
      tipo: "text", // Tipo de input do campo
    },
    {
      nome: "Deixe seu recado", // Rótulo do campo
      id: "recado", // Identificador do campo
      tipo: "text", // Tipo de input do campo
    },
  ];

  const campoServico = [ // Define um array de objetos representando os campos para cadastrar serviços
    {
      nome: "Titulo", // Rótulo do campo
      id: "titulo", // Identificador do campo
      tipo: "text", // Tipo de input do campo
    },
    {
      nome: "Descricao", // Rótulo do campo
      id: "descricao", // Identificador do campo
      tipo: "text", // Tipo de input do campo
    },
    {
      nome: "Imagem", // Rótulo do campo
      id: "imagem", // Identificador do campo
      tipo: "text", // Tipo de input do campo
    },
  ];

  return ( // Renderiza a interface do usuário
    <>
      <Cabecalho /> {/* Renderiza o componente Cabecalho */}
      <Menu /> {/* Renderiza o componente Menu */}

      <Secao> {/* Renderiza uma seção */}
        <img src="src/assets/topo.jpg" alt="Topo" /> {/* Exibe uma imagem */}
      </Secao>

      <Secao> {/* Renderiza outra seção */}
        <Titulo texto="Cadastrar Serviço" /> {/* Renderiza um título */}
        <Formulario campos={campos} /> {/* Renderiza um formulário com os campos definidos */}
        <button onClick={lerBanco}>Ler dados do Banco </button> {/* Botão que executa a função lerBanco ao ser clicado */}
      </Secao>

      <Secao> {/* Renderiza outra seção */}
        <Titulo texto="Contato" /> {/* Renderiza um título */}
        <Formulario2 campos2={campos2} /> {/* Renderiza um segundo formulário com os campos2 definidos */}
        <button onClick={lerBanco}>Ler dados do Banco </button> {/* Botão que executa a função lerBanco ao ser clicado */}
      </Secao>

      <Secao> {/* Renderiza outra seção */}
        <Titulo texto="Serviços" /> {/* Renderiza um título */}
        <div className="servicos"> {/* Cria um contêiner para os serviços */}
          {servicos.map((servico, index) => ( // Itera sobre o array 'servicos' e renderiza um Cartao para cada serviço
            <Cartao
              key={index} // Define uma chave única para cada cartão
              titulo={servico.nome} // Passa o nome do serviço como título do Cartao
              descricao={servico.descricao} // Passa a descrição do serviço para o Cartao
              imagem={`src/img/${servico.url}.jpeg`} // Define a URL da imagem do Cartao
            />
          ))}
        </div>
      </Secao>
    </>
  );
};

export default Principal; // Exporta o componente App para uso em outras partes da aplicação
