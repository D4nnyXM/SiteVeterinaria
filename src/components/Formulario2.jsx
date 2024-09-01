import "./Formulario2.css"; // Importa o arquivo de estilos CSS para o formulário
import { useState } from "react"; // Importa o hook useState para gerenciar o estado do componente
import { collection, addDoc } from "firebase/firestore"; // Importa funções do Firestore para manipulação de dados
import db from "../database/firebaseConfig"; // Importa a configuração do banco de dados Firebase

// Componente Formulario2 que recebe os campos como props
function Formulario2({ campos2 }) {
  const [dados, setDados] = useState({}); // Estado para armazenar os dados do formulário

  // Função para atualizar os dados conforme o usuário digita no formulário
  const alteraDados = (e) => {
    const valor = e.target.value; // Obtém o valor do campo de entrada
    const chave = e.target.id; // Obtém o ID do campo de entrada para usar como chave no estado
    setDados({ ...dados, [chave]: valor }); // Atualiza o estado com a nova entrada
  };

  // Função assíncrona para salvar os dados no Firestore ao submeter o formulário
  const salvarDados = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    console.log(dados); // Exibe os dados no console (opcional, para depuração)
    const docRef = await addDoc(collection(db, "comentarios"), dados); // Adiciona os dados à coleção "comentarios" no Firestore
  };

  return (
    <form id="form_contato" onSubmit={salvarDados}>
      {campos2.map((item) => {
        return (
          <div className="contato" key={item.id}> {/* Cada campo do formulário é mapeado aqui */}
            <label htmlFor={item.id}>{item.nome}</label> {/* Rótulo do campo */}
            <input
              id={item.id}
              type={item.tipo}
              value={dados[item.id] || ''} // Valor do campo vinculado ao estado
              onChange={alteraDados} // Função chamada ao alterar o valor do campo
            />
          </div>
        );
      })}
      <button type="submit">Enviar informação</button> {/* Botão para submeter o formulário */}
    </form>
  );
} // Fim do componente Formulario2

export default Formulario2; // Exporta o componente para uso em outras partes da aplicação
