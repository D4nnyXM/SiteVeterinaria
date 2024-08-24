import { useState } from "react"; // Importa o hook useState do React
import db from "../database/firebaseConfig"; // Importa a configuração do Firebase
import { collection, addDoc } from "firebase/firestore"; // Importa funções para interagir com o Firestore
import "./Formulario.css"; // Importa o arquivo de estilos CSS específico para o formulário

function Formulario({ campos }) { // Define o componente Formulario, que recebe 'campos' como props
  const [dados, setDados] = useState({}); // Cria um estado 'dados' para armazenar os valores do formulário

  const alteraDados = (e) => { // Função que lida com a alteração dos dados nos campos do formulário
    const valor = e.target.value; // Obtém o valor do campo que está sendo alterado
    const chave = e.target.id; // Obtém o id do campo que está sendo alterado
    setDados({ ...dados, [chave]: valor }); // Atualiza o estado 'dados' com o novo valor para o campo correspondente
  };

  const salvarDados = async (e) => { // Função assíncrona para salvar os dados no Firestore
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    try {
      await addDoc(collection(db, "servicos"), dados); // Adiciona um novo documento na coleção 'servicos' do Firestore com os dados do formulário
      alert("Serviço cadastrado com sucesso!"); // Exibe uma mensagem de sucesso ao usuário
      setDados({}); // Reseta o estado 'dados' para limpar o formulário
    } catch (error) {
      console.error("Erro ao salvar os dados:", error); // Exibe uma mensagem de erro no console, caso ocorra
      alert("Ocorreu um erro ao cadastrar o serviço. Tente novamente."); // Exibe uma mensagem de erro ao usuário
    }
  };

  return ( // Renderiza o formulário na interface do usuário
    <form id="form_contato" onSubmit={salvarDados}> {/* Define o formulário e o que deve acontecer ao ser submetido */}
      {campos.map((item) => ( // Itera sobre o array 'campos' e renderiza um campo de entrada para cada item
        <div className="contato" key={item.id}> {/* Cria um contêiner para cada campo do formulário */}
          <label htmlFor={item.id}>{item.nome}</label> {/* Renderiza o rótulo para o campo */}
          <input
            id={item.id} // Define o id do campo
            type={item.tipo} // Define o tipo de input (texto, email, etc.)
            value={dados[item.id] || ""} // Define o valor do campo a partir do estado 'dados' ou uma string vazia se não houver valor
            onChange={alteraDados} // Chama a função alteraDados sempre que o valor do campo mudar
          />
        </div>
      ))}

      <button type="submit">Enviar informação</button> {/* Botão para submeter o formulário */}
    </form>
  );
}

export default Formulario; // Exporta o componente Formulario para uso em outras partes da aplicação
