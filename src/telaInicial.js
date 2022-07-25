import React from "react"
import logo from "./assets/logo.png"
import {Link} from "react-router-dom"

function TelaInicial(){

    return(

        <div className="primeiraTela">
            <img src={logo} />
            <h1>ZapRecall</h1>
            <Link to="/flashcards">
            <div>
                <h2>Iniciar Recall!</h2>
            </div>
            </Link>
        </div>
    );
}

export default TelaInicial