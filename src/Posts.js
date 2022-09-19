import React from "react";

function CompletaPost(props) {
  const[coracao,setCoracao] = React.useState("heart-outline");
  const[cor,setCor] = React.useState("nao-curtido");
  const[curtir, setCurtir] = React.useState(props.nCurtida);
  const[salvo,setSalvo]= React.useState("bookmark-outline");
  
  function darLike(){
    if(coracao === "heart-outline"){
      setCoracao("heart");
      setCor("curtido");
      setCurtir(curtir+1);

    }
    else{
      setCoracao("heart-outline");
      setCor("nao-curtido");
      setCurtir(curtir-1);

    }
    
  }
  function salvar(){
    if(salvo === "bookmark-outline"){
      setSalvo("bookmark");
    }
    else{
      setSalvo("bookmark-outline");     
    }
    
  }

  return (
  <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.imgUsuario} />
        {props.nmUsuario}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.ftPostada} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon onClick={darLike} name={coracao} class={cor}   ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon onClick={salvar} name={salvo}></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.imgCurtida} />
        <div class="texto">
          Curtido por <strong>{props.perfilCurt}</strong> e <strong>outras {curtir} pessoas</strong>
        </div>
      </div>
    </div>
  </div>)
}

export default function Posts() {
  const postagem = [{ imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", fotoPostada: "assets/img/gato-telefone.svg", imagemCurtida: "assets/img/respondeai.svg", perfilCurtida: "respondeai", numCurtida: 101523},
  { imagemUsuario: "assets/img/barked.svg", nomeUsuario: "barked", fotoPostada: "assets/img/dog.svg", imagemCurtida: "assets/img/dog.svg", perfilCurtida: "adorable_animals", numCurtida: 99159 }]

  return (

    <div class="posts">
      {postagem.map((p) => <CompletaPost imgUsuario={p.imagemUsuario} nmUsuario={p.nomeUsuario} ftPostada={p.fotoPostada} imgCurtida={p.imagemCurtida} perfilCurt={p.perfilCurtida} nCurtida={p.numCurtida} />)}
    </div>
  )
}