import { useState } from "react";
import Conteudo from "./conteudo";
import Card from "./card";


function Flashcard({pergunta, resposta, estado, index}){
   const [estilos, setEstilos] = useState("flashcard")
   const [conteudo, setConteudo] = useState(
    <Conteudo index={index}/>
   )
    return(
        <div className={estilos} onClick={() => setConteudo(
        <Card 
        index={index}
        estado={estado}
        pergunta={pergunta} 
        resposta={resposta} 
        setConteudo={setConteudo}
        setEstilos={setEstilos}/>)}>
           {conteudo}
        </div>
    )
}
export default Flashcard;