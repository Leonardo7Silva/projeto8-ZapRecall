import ReactDOM from "react-dom";
import TelaInicial from "./telaInicial";
import "./CSS/style.css";
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Flashcards from "./Flashcards";

function  App(){
return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<TelaInicial />}/>   
        <Route path="/flashcards" element={<Flashcards/>}/> 
    </Routes>
    </BrowserRouter>
    </>
);
}

ReactDOM.render(<App/>, document.querySelector(".root"));