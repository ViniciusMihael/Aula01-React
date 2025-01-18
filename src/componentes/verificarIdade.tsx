import React from "react";



interface Props {
    idade: number;
}

const VerificarIdade: React.FC<Props> = ({idade}) =>{
    return(
        <div>
            {idade > 0?(idade > 18? <p>Maior de idade</p>: <p>Menor de idade</p>) 
            :<p>Idade invalida</p>}
        </div>
        
    );
};

export default VerificarIdade;
