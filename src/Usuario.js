import React from "react"

function User() {
    const [user, setUser] = React.useState("Catana");
    const [nomeDeUser, setNomeDeUser] = React.useState("catanacomics");
    function alteraUser() {
        setUser(prompt("Qual seu nome?"));
        setNomeDeUser(prompt("Qual seu nome de usuário?"));
    }
    const [img, setImg] = React.useState("assets/img/catanacomics.svg");
    return (<div class="usuario">
        <img onClick={(j) => setImg(prompt("Insira o link da imagem que deseja trocar:"))} src={img} />
        <div class="texto">
            <strong>{nomeDeUser}</strong>
            <span>
                {user}
                <ion-icon onClick={alteraUser} name="pencil"></ion-icon>
            </span>
        </div>
    </div>)
}
export default function Usuario() {
    return (<User />)
}
