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

// Tocar automaticamente (pode exigir interação do usuário em alguns navegadores)
window.addEventListener('load', () => {
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  }
});

audioBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audioBtn.textContent = '🔊 Pausar Música';
  } else {
    audio.pause();
    audioBtn.textContent = '🔇 Tocar Música';
  }
});
