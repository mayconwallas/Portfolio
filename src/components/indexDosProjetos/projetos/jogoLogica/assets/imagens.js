//Código das imagens e sons

//imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

//sons
let somColidiu;
let somPontos;
let somTrilha;


function preload () {
  imagemDaEstrada = loadImage("assets/imagens/estrada.png");
  imagemDoAtor = loadImage("assets/imagens/ator-1.png");
  imagemCarro1 = loadImage("assets/imagens/carro-1.png");
  imagemCarro2 = loadImage("assets/imagens/carro-2.png");
  imagemCarro3 = loadImage("assets/imagens/carro-3.png");
  imagemCarro4 = loadImage("assets/imagens/carro-4.png");
  imagemCarro5 = loadImage("assets/imagens/carro-5.png");
  imagemCarro6 = loadImage("assets/imagens/carro-6.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  
  somColidiu = loadSound("assets/sons/colidiu.mp3");
  somPontos = loadSound("assets/sons/pontos.wav");
  somTrilha = loadSound("assets/sons/trilha.mp3");
}