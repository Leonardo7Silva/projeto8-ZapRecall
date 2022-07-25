import { useState } from "react";
import Conteudo from "./conteudo";
import Card from "./card";


function Flashcard({
    pergunta, 
    resposta, 
    estado, 
    index, 
    aumentar, 
    adicionarSelo, 
    certo, 
    medio, 
    errado}){
   const [estilos, setEstilos] = useState("flashcard")
   const [conteudo, setConteudo] = useState(
    <Conteudo index={index}/>
   )
    return(
        <div className={estilos} onClick={() => setConteudo(
        <Card 
        index={index}
        aumentar={aumentar}
        estado={estado}
        pergunta={pergunta} 
        resposta={resposta} 
        adicionarSelo={adicionarSelo}
        certo={certo}
        medio={medio}
        errado={errado}/>)}>
           {conteudo}
        </div>
    )
}
export default Flashcard;