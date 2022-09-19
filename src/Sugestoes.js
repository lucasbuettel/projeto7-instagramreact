function RenderizaSugest(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imgUser} />
        <div class="texto">
          <div class="nome">{props.nmUser}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>

  )
}

export default function Sugestoes() {
  const sugestaoSeguidores = [{imgUser: "assets/img/bad.vibes.memes.svg", nmUser: "bad.vibes.memes", razao: "Segue você" },
  {imgUser: "assets/img/chibirdart.svg", nmUser: "chibirdart", razao: "Segue você" },
  {imgUser: "assets/img/razoesparaacreditar.svg", nmUser: "razoesparaacreditar", razao: "Novo no Instagram" },
  {imgUser: "assets/img/adorable_animals.svg", nmUser: "adorable_animals", razao: "Segue você" },
  {imgUser: "assets/img/smallcutecats.svg", nmUser: "smallcutecats", razao: "Segue você" }];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestaoSeguidores.map((s) => < RenderizaSugest imgUser = {s.imgUser} nmUser = {s.nmUser} razao = {s.razao}/> )}
    </div>)
}