// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const mainImg = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  // Initialize confetti library
  const jsConfetti = new JSConfetti();

  // Horn Selection
  hornSelect.addEventListener('change', (event) => {
    const horn = event.target.value;
    if (horn !== 'select') {
      mainImg.src = `assets/images/${horn}.svg`;
      audio.src = `assets/audio/${horn}.mp3`;
    }
  });

  // Volume Control
  volumeSlider.addEventListener('input', (event) => {
    const vol = event.target.value;
    
    // Set actual audio volume (range 0 to 1)
    audio.volume = vol / 100;

    // Update Icon
    if (vol == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play Sound & Confetti
  playButton.addEventListener('click', () => {
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}