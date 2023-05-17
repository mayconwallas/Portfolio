//Código dos carros

//lista carros
let yCarros = [40, 96, 150, 210, 265, 318];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2.1, 2.2, 4, 2.8, 3.2, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function resetaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if (passouFinalTela(xCarros[i])){
          xCarros[i]  = 600;
    }
  }
}

function passouFinalTela (xCarros){
  return xCarros < - 50;
}