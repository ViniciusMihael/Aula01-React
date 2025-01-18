import React from "react";

interface Props{
    nome: string;
}

const VerificarNome: React.FC<Props> = ({nome}) => {
    return(
        <div>
            {nome.length == 0?(nome == null? <p>Nome invalido</p>:<p>nome valido</p>): <p>nome não inserido!</p>}
        </div>
    )
}

export default VerificarNome;