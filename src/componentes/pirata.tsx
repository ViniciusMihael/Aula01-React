type PirataProps = {
    nome: string;
    cargo: string;
    imagem: string;
}

function Pirata({nome, cargo, imagem}: PirataProps){
    return(
        <div className="pirata">
            <img src={imagem} alt={nome} style={{
                height: "200px",
                width: "200px",
                border: "1px solid black",
                borderRadius: "12px"
            }}/>
            <h3>{nome}</h3>
            <p>{cargo}</p>
        </div>
    );
}
export default Pirata;