function RenderizaStorie(props) {
  return (<div class="story">
    <div class="imagem">
      <img src={props.imgUser} />
    </div>
    <div class="usuario">
      {props.nmUser}
    </div>
  </div>)
}
export default function Stories() {
  const stories = [{ imgUser: "assets/img/9gag.svg", nmUser: "9gag" },
  { imgUser: "assets/img/meowed.svg", nmUser: "meowed" },
  { imgUser: "assets/img/barked.svg", nmUser: "barked" },
  { imgUser: "assets/img/nathanwpylestrangeplanet.svg", nmUser: "nathanwpylestrangeplanet" },
  { imgUser: "assets/img/wawawicomics.svg", nmUser: "wawawicomics" },
  { imgUser: "assets/img/respondeai.svg", nmUser: "respondeai" },
  { imgUser: "assets/img/filomoderna.svg", nmUser: "filomoderna" },
  { imgUser: "assets/img/memeriagourmet.svg", nmUser: "memeriagourmet" }];

  return (
    <div class="stories">
      {stories.map((s) => <RenderizaStorie imgUser ={s.imgUser} nmUser={s.nmUser}/>)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>)
}