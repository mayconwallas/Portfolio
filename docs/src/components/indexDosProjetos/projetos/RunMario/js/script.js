const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const clouds2 = document.querySelector('.clouds2');

function jump() {
  mario.classList.add("jump");
  setTimeout(nojump, 500);

  function nojump() {
    mario.classList.remove("jump");
  }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''));
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100 ) {
            clouds.style.animation = 'none';
            clouds2.style.animation = 'none';
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            mario.src = "./assets/game-over.png"; 
            mario.style.width = '80px';
            mario.style.marginLeft = '50px';
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            clearInterval(loop);
        
    }
}, 10);

document.addEventListener("keydown", jump);
