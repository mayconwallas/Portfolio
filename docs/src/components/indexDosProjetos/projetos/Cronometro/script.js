const tagDec = document.querySelector('.decimo');
const tagSec = document.querySelector('.segundos');
const tagMin = document.querySelector('.minutos');
const tagStart = document.querySelector('.start');
const tagStop = document.querySelector('.stop');
const tagReset = document.querySelector('.reset');
// console.log(tagMin, tagSec, tagStart, tagStop, tagReset);

let decimo = 0;
let segundos = 0;
let minutos = 0; 
let Time;


function started() {
    clearInterval(Time);
    Time = setInterval(secStarted, 100);

    function secStarted() {
        decimo++;
        if (decimo <= 9){
            tagDec.innerHTML = decimo;
        } else {
            decimo = 0
            segundos++;
        }
        

        if(segundos <= 59){
            tagSec.innerHTML = segundos;
        }
        if(segundos > 59){
            segundos = 0;
            minutos++
            tagMin.innerHTML = minutos;
        }
    }
}

function stoping() {
    clearInterval(Time);
}

function reset() {
    clearInterval(Time);
    decimo = 0;
    segundos = 0;
    minutos = 0; 
    tagDec.innerHTML = decimo;
    tagSec.innerHTML = segundos;
    tagMin.innerHTML = minutos;
}

tagStart.addEventListener("click", started);
tagStop.addEventListener("click", stoping);
tagReset.addEventListener("click", reset)
