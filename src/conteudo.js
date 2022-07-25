import setinha from "./assets/Vector.png"


function Conteudo({index}){
    return(
        <>
        <h2>Pergunta {index}</h2>
        <img src={setinha}/>
        </>
    )
}

export default Conteudo