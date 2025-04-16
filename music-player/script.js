let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.remove('bi-play-circle-fill');
    playPauseBtn.classList.add('bi-pause-circle-fill');
  } else {
    audio.pause();
    playPauseBtn.classList.remove('bi-pause-circle-fill');
    playPauseBtn.classList.add('bi-play-circle-fill');
  }
});
