import "./Card/card.css"
import rodinha from "./assets/setinha.png"
import { useState } from "react"
import { Alternativas } from "./alternativas"


function Card({pergunta, resposta, estado, setEstilos, setConteudo, index}){
const [naCarta, setNaCarta] = useState(pergunta)
const [auxiliar, setAuxiliar] = useState(
    <img src={rodinha} onClick={chamador} />
)
function chamadors(){
    setAuxiliar("");
    setNaCarta(
    `Pergunta ${index}`
    );
}
function chamador(){
    setNaCarta(resposta);
    setAuxiliar(
        <Alternativas chamadors={chamadors}/>
    );  
}


    return(

    <>
            <div className="card" onClick={chamador}>
            <h1>
            {naCarta}  
            </h1>
            {auxiliar}
            </div>
    </>
    )
}

export default Card