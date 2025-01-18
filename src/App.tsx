import "./button.css"
//import { Mensagem } from "./componentes/mensagem"
//import Pirata from "./componentes/pirata"
//import chooper from "./componentes/img/chopper.png"
//import Pirata from "./componentes/pirata"
import Saudacao from "./componentes/saudacao"


export function App(){
    return(
        <>
        
        <body style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"}}>

            <Saudacao nome="Vinicius Mihael" idade={17}/>
            <Saudacao nome="Richarlisson" idade={19}/>
            <Saudacao nome="Zezinho" idade ={0}/>


        </body>

        </>
        
    )
}