// Slides
let slides = document.querySelectorAll(".slide");
let index = 0;

function mostrarProximoSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

// Troca de slides a cada 3 segundos
setInterval(mostrarProximoSlide, 3000);

// Áudio
const audio = document.getElementById('audio');
const audioBtn = document.getElementById('audio-btn');

// Tela de introdução
const introScreen = document.getElementById('intro-screen');
const startBtn = document.getElementById('start-btn');
const mainContent = document.querySelector('.container');

// Oculta a tela principal no início
mainContent.style.display = 'none';

// Evento ao clicar em "Começar"
startBtn.addEventListener('click', () => {
  introScreen.style.display = 'none';     // Esconde tela de introdução
  mainContent.style.display = 'block';    // Mostra a principal
  audio.play();                            // Toca a música
});

// Botão de pausar/despausar a música
audioBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audioBtn.textContent = '🔊 Pausar Música';
  } else {
    audio.pause();
    audioBtn.textContent = '🔇 Tocar Música';
  }
});

