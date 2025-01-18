
import React from "react";
import VerificarIdade from "./verificarIdade";



interface Props{
    nome: string;
    idade: number;
}

const Saudacao: React.FC<Props> = ({nome, idade}) =>{
    return(
        <div className="saudacao">
            <h1 style={{
                fontFamily:"fantasy"
            }}>Seja muito bem vindo {nome} </h1>
            <VerificarIdade idade = {idade}/>


        </div>

    )
}
export default Saudacao;
