const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startTime = document.querySelector('#start-pause');
const playPause = document.querySelector('#start-pause span');
const playPauseIcon = document.querySelector(".app__card-primary-butto-icon");
const tempoNaTela = document.querySelector('#timer')


const musicaFocoImput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const beep = new Audio('./sons/beep.mp3');
const playSon = new Audio('./sons/play.wav');
const pauseSon = new Audio('./sons/pause.mp3');

let tempoDerrodidoSegundos = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoImput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})


focoBt.addEventListener('click', () => {
    tempoDerrodidoSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDerrodidoSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDerrodidoSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');

});


function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco': 
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Quetal dar uma respirada?,<br>
            <strong class="app__title-strong">Faça uma pausa curta.</strong>`
            break;

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superficie,<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
    
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDerrodidoSegundos <= 0) {
        beep.play()
        alert("Tempo finalizado!");
        zerar();
        return
    }
    tempoDerrodidoSegundos -= 1
    mostrarTempo();
    
}

startTime.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        pauseSon.play();
        zerar();
        return
    }
    playSon.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    playPause.textContent = "Pausar";
    playPauseIcon.setAttribute('src', `./imagens/pause.png`);
}

function zerar() {
    clearInterval(intervaloId);
    playPause.textContent = "Começar";
    playPauseIcon.setAttribute('src', `./imagens/play_arrow.png`);
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDerrodidoSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();