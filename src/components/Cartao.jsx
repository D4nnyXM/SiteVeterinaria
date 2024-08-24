import React from "react"; // Importa a biblioteca React, necessária para criar componentes React
import "./Cartao.css"; // Importa o arquivo de estilos CSS específico para o componente Cartao

const Cartao = ({ titulo, descricao, imagem }) => { // Define o componente funcional Cartao que recebe 'titulo', 'descricao' e 'imagem' como props
    return ( // Retorna o JSX que será renderizado na interface
        <div className="cartao"> {/* Define a estrutura do cartão com uma classe CSS para estilização */}
            <img src={imagem} alt={titulo} className="fotoServico" /> {/* Renderiza uma imagem usando a URL passada na prop 'imagem' e define o texto alternativo com o 'titulo' */}
            <div className="conteudo-cartao"> {/* Define um contêiner para o conteúdo textual do cartão */}

                <h3>{titulo}</h3> {/* Renderiza o título do cartão, passado como prop */}
                <p>{descricao}</p> {/* Renderiza a descrição do cartão, passada como prop */}
            </div>
        </div>

    );
};

export default Cartao; // Exporta o componente Cartao para que ele possa ser utilizado em outras partes da aplicação
