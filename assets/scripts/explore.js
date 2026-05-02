// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImg = document.querySelector('img');

  let voices = [];

  // Populate Voice List
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Voices are loaded asynchronously in many browsers
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  populateVoiceList();

  // Speech and Animation
  button.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    // Find the voice object that matches the selection
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    // Change face image when speaking starts
    utterThis.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    // Change face image back when speaking ends
    utterThis.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  });
}