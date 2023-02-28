//Código do Ator-principal
let xTatu = 90;
let yTatu = 366;
let colisao = false;
let meusPontos = 0


function mostraAtor(){
  image(imagemDoAtor, xTatu , yTatu , 30 , 30);
}

function movimentaTatu(){
  if (keyIsDown(UP_ARROW)){
    yTatu -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeMover()){
    yTatu += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xTatu, yTatu, 15)
    if(colisao){
      colidiu();
      somColidiu.play();
      if(pontosMaiorQueZero()){
        meusPontos--;
      }
    }
  }
}

function colidiu() {
  yTatu = 366;
}

function incluiPontos() {
  fill(0,255,255);
  textAlign(CENTER);
  textSize(30);
  text(meusPontos, width / 5, 29);
  marcaPonto();
}

function marcaPonto(){
  if( yTatu < 15 ){
    colidiu();
    somPontos.play();
    meusPontos++ 
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeMover(){
  return yTatu < 366;
}
