import "./Flashcards/flashcards.css"
import Flashcard from "./Flashcard"
import loguinho from "./assets/logo-pequeno.png"

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
            estado={false} />
        )}
        </div>
        <div className="rodape">
            <h3>0/{cartoesJSX.length} Concluídos</h3>
        </div>
        </>


    )
};

export default Flashcards;