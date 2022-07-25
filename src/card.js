import "./Card/card.css"
import rodinha from "./assets/setinha.png"
import certo from "./assets/Vector(2).png"
import medio from "./assets/Vector(3).png"
import errado from "./assets/Vector(1).png"
import { useState } from "react"


function Card({pergunta, resposta, estado, setEstilos, setConteudo, index}){
const [naCarta, setNaCarta] = useState(pergunta)
const [sumir1, setSumir1] = useState("sumir")
const [sumir2, setSumir2] = useState(" ")
const [imagem, setImagem] = useState(rodinha)
const [cor, setCor] = useState ("")



    return(

    <>
            {console.log("renderizei!!")}
            {console.log(sumir1)}
            <div className="card" >
            <div className={`auxiliar ${cor}`} onClick={()=>
            {setNaCarta(`${resposta}`)
            setSumir1("")
            setSumir2("sumir")}}>
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
                    setSumir2("")}}>
                <h2>
                    Não lembrei
                </h2>
                </div>
                <div className="amarelo" onClick={()=>{
                    setNaCarta(`Pergunta ${index}`)
                    setSumir1("sumir")
                    setCor("amare")
                    setImagem(medio)
                    setSumir2("")}}>
                <h2>
                    Quase não lembrei
                </h2>
                </div>
                <div className="verde" onClick={()=>{
                    setNaCarta(`Pergunta ${index}`)
                    setSumir1("sumir")
                    setCor("verd")
                    setImagem(certo)
                    setSumir2("")}}>
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