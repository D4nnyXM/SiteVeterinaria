import React from "react"; // Importa React para criar componentes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa componentes para gerenciar rotas
import Principal from "./components/Principal"; // Importa o componente Principal
import Admin from "./components/Admin";
import Login from "./components/Login";
import { collection, getDocs } from "firebase/firestore"; // Importa funções para interagir com o Firestore

import './App.css'; // Importa o arquivo de estilos CSS
import Login from "./components/Login";

const App = () => { 
  return (
    <>   {/* BrowserRouter é responsável por gerenciar as rotas do navegador */}  
   
    <Router> {/* Define a estrutura de rotas do componente App usando BrowserRouter e Routes */}
      <Routes> {/* Routes renderiza os componentes filhos que correspondem às rotas */}
        <Route path="/" element={<Principal />} /> {/* Route define uma rota com um path específico e o componente para renderizar */}
        <Route path="/" element={<Login />} />{/**caminho e o elemento */}
        <Route path="/" element={<Painel />} />
        
      </Routes>
      

    </Router>
    </>
  )
};

export default App; // Exporta o componente App para uso em outras partes da aplicação
