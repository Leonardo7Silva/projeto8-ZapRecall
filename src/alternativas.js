export function Alternativas({chamadors}){

   
    return(
        <div className="negocinhos">
                <div className="vermelha" onClick={chamadors}>
                <h2>
                    Não lembrei
                </h2>
                </div>
                <div className="amarelo">
                <h2>
                    Quase não lembrei
                </h2>
                </div>
                <div className="verde">
                <h2>
                    Zap!
                </h2>
                </div>
            </div>
    )
}