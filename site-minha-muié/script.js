// Efeito de digitação automática
const texto = "Oi Pamela, tenho uma surpresa para você! :) Espero que goste!";
let index = 0;
const typed = document.getElementById("typed");

function escrever() {
  if (index < texto.length) {
    typed.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escrever, 60);
  }
}
escrever();

function mostrarMensagem() {
  const msg = document.getElementById("mensagem");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.opacity = 1;
    const musica = document.getElementById("musica-fundo");
    musica.volume = 0.2;  // <-- CORRIGIDO AQUI
    musica.play();
  }, 50);
}

// Controle do botão de música (fora da função mostrarMensagem)
const musica = document.getElementById("musica-fundo");
const musicLayer = document.getElementById("music-layer");
const btnPlayPause = document.getElementById("btn-play-pause");

function atualizarEstado() {
  if (musica.paused) {
    musicLayer.classList.remove("playing");
    musicLayer.classList.add("paused");
    btnPlayPause.setAttribute("aria-label", "Tocar música");
    btnPlayPause.textContent = "▶";
  } else {
    musicLayer.classList.remove("paused");
    musicLayer.classList.add("playing");
    btnPlayPause.setAttribute("aria-label", "Pausar música");
    btnPlayPause.textContent = "⏸";
  }
}

btnPlayPause.addEventListener("click", (e) => {
  e.stopPropagation();
  if (musica.paused) {
    musica.volume = 1.0;  // <-- aqui também
    musica.play();
  } else {
    musica.pause();
  }
  atualizarEstado();
});

musica.addEventListener("ended", atualizarEstado);

atualizarEstado();
