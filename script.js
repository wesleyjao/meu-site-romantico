let slides = document.querySelectorAll(".slide");
let index = 0;

function mostrarProximoSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(mostrarProximoSlide, 3000);

// Áudio
const audio = document.getElementById('audio');
const audioBtn = document.getElementById('audio-btn');
let isPlaying = true;

// Tocar áudio automaticamente após a página carregar
window.addEventListener('load', () => {
  // Tentativa automática
  const playPromise = audio.play();

  // Se falhar, espera o primeiro clique do usuário
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  }
});

// Função do botão para pausar/retomar a música
audioBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audioBtn.textContent = '🔊 Pausar Música';
  } else {
    audio.pause();
    audioBtn.textContent = '🔇 Tocar Música';
  }
});
