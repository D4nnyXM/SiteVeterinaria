import React from "react";
import Formulario from "./Formulario";
function Login(){
    return <div>
        <form >
            <input type="text" placeholder=" Login"/>
            <input type="text" placeholder=" Senha"/>
            <button type="submit">Enviar</button>
        </form>
        
    </div>;
}

export default Login;