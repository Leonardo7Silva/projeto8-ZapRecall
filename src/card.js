import "./Card/card.css"
import rodinha from "./assets/setinha.png"
import { useState } from "react"


function Card({pergunta, resposta, estado, setEstilos, setConteudo, index}){
const [naCarta, setNaCarta] = useState(pergunta)
const [sumir1, setSumir1] = useState("sumir")
const [sumir2, setSumir2] = useState(" ")
function chamador(){
    setNaCarta(`${resposta}`);
    setSumir1("");
    setSumir2("sumir")
}


    return(

    <>
            <div className="card" onClick={chamador}>
            <h1>
            {naCarta}  
            </h1>
            <img src={rodinha} className={`${sumir2}`}/>
            <div className={`negocinhos ${sumir1}`}>
                <div className="vermelha" onClick={()=>setSumir1("sumir")}>
                <h2>
                    Não lembrei
                </h2>
                </div>
                <div className="amarelo" onClick={()=>setSumir1("sumir")}>
                <h2>
                    Quase não lembrei
                </h2>
                </div>
                <div className="verde" onClick={()=>setSumir1("sumir")}>
                <h2>
                    Zap!
                </h2>
                </div>
            </div>
            </div>
    </>
    )
}

export default Card