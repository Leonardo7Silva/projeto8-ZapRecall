import "./Card/card.css"
import rodinha from "./assets/setinha.png"
import { useState } from "react"


function Card({pergunta, resposta, estado, setEstilos, setConteudo, index, aumentar, adicionarSelo, certo, medio, errado}){
const [naCarta, setNaCarta] = useState(pergunta)
const [sumir1, setSumir1] = useState("sumir")
const [sumir2, setSumir2] = useState(" ")
const [imagem, setImagem] = useState(rodinha)
const [cor, setCor] = useState ("")

function chamar(){
if(imagem!== rodinha){
    return;
} else 
setNaCarta(`${resposta}`)
setSumir1("")
setSumir2("sumir") 
}

    return(

    <>
            <div className="card" >
            <div className={`auxiliar ${cor}`} onClick={chamar}>
            <h1>
            {naCarta}  
            </h1>
            <img src={imagem} className={`${sumir2}`}/>
            </div>
            <div className={`negocinhos ${sumir1}`}>
                <div className="vermelha" onClick={()=>{
                    setNaCarta(`Pergunta ${index}`)
                    setSumir1("sumir")
                    setCor("verm")
                    setImagem(errado)
                    setSumir2("")
                    adicionarSelo(errado)
                    aumentar()}}>
                <h2>
                    Não lembrei
                </h2>
                </div>
                <div className="amarelo" onClick={()=>{
                    setNaCarta(`Pergunta ${index}`)
                    setSumir1("sumir")
                    setCor("amare")
                    setImagem(medio)
                    setSumir2("")
                    aumentar()
                    adicionarSelo(medio)}}>
                <h2>
                    Quase não lembrei
                </h2>
                </div>
                <div className="verde" onClick={()=>{
                    setNaCarta(`Pergunta ${index}`)
                    setSumir1("sumir")
                    setCor("verd")
                    setImagem(certo)
                    setSumir2("")
                    aumentar()
                    adicionarSelo(certo)}}>
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