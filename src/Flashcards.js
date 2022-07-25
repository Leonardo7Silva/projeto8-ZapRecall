import "./Flashcards/flashcards.css"
import Flashcard from "./Flashcard"
import loguinho from "./assets/logo-pequeno.png"
import { useState } from "react";
import certo from "./assets/Vector(2).png"
import medio from "./assets/Vector(3).png"
import errado from "./assets/Vector(1).png"
import feliz from "./assets/party.png"
import triste from "./assets/sad.png"

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
    const [imagem2,setImagem2] = useState("")
    const [mensagem,setMensagem] =useState("")

    function resultado(){
        if(contador +1 === deck.length){
            let verificador = selos.filter((value)=> value == errado)
            if (verificador.length>0){
                return setImagem2(
                    <>
                    <img src={triste}/>
                    <h1>Putz...</h1>
                    </>
                ),setMensagem(
                    <h3>
                        Ainda faltam alguns...
                        Mas não desanime!
                    </h3>
                )}else return setImagem2(
                    <>
                    <img src={feliz}/>
                    <h1>Parabens!</h1>
                    </>
                ),setMensagem(
                    <h3>
                        Você não esqueceu de nenhum flashcard!
                    </h3>);
        }else return;
    };

    function adicionarSelo(palavra){
     let novoSelo = [...selos, palavra]
     setSelos(novoSelo)
    }
    function aumentarContador(){
        setContador(contador + 1)
    }
    return(
        <>
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
            errado={errado}
            resultado={resultado} />
        )}
        </div>
        <div className="rodape">

                
            <div className={`mensagem`}>
                {imagem2}
                {mensagem}
            </div>
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

export default Flashcards