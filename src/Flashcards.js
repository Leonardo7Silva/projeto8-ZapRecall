import "./Flashcards/flashcards.css"
import Flashcard from "./Flashcard"
import loguinho from "./assets/logo-pequeno.png"
import { useState } from "react";
import certo from "./assets/Vector(2).png"
import medio from "./assets/Vector(3).png"
import errado from "./assets/Vector(1).png"

const cartoesJSX = [
    {
        pergunta: "O que é JSX?",
        Resposta: "Uma extensão de linguagem do JavaScript"
    },
    {
        pergunta: "O React é __",
        Resposta: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __ ",
        Resposta: "letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX",
        Resposta: "expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __ ",
        Resposta: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta: "Usamos o npm para __ ",
        Resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta: "Usamos props para __",
        Resposta: "passar diferentes informações para componentes "
    },
    {
        pergunta: "Usamos estado (state) para __",
        Resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }]

function Flashcards(){
    const deck = cartoesJSX.sort(() => Math.random() - 0.5 );
    const [contador,setContador] = useState(0)
    const [selos, setSelos] = useState([])

    function adicionarSelo(palavra){
     let novoSelo = [...selos, palavra]
     setSelos(novoSelo)
    }
    function aumentarContador(){
        setContador(contador + 1)
    }
    return(
        <>
        {console.log(selos)}
        <div className="logoFlashcards">
            <img src={loguinho}/>
            <h1> ZapRecall</h1>
        </div>
        <div className= "cartoes"> 
        {deck.map((value, index)=>
            <Flashcard 
            key={index}
            pergunta={value.pergunta}
            resposta={value.Resposta}
            index={index +1}
            aumentar={aumentarContador}
            adicionarSelo={adicionarSelo} 
            certo={certo}
            medio={medio}
            errado={errado} />
        )}
        </div>
        <div className="rodape">
            <h3>{contador}/{cartoesJSX.length} Concluídos</h3>
            <div className="selinhos">
                
            {selos.map((value)=>
                <img src={value}/> 
            )}
            </div>
        </div>
        </>


    )
};

export default Flashcards;