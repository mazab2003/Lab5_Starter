// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // DOM REFS 
  const textArea = document.getElementById('text-to-speak');   
  const voiceSelect = document.getElementById('voice-select');   
  const talkButton = document.querySelector('#explore button');  
  const faceImg = document.querySelector('#explore img');   

  // Populate Voice
  function populateVoices() {
    voiceSelect.innerHTML =
      '<option value="select" disabled selected>Select Voice:</option>';

    speechSynthesis.getVoices().forEach((voice, idx) => {
      const option = document.createElement('option');
      option.value = idx;                                 
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  speechSynthesis.addEventListener('voiceschanged', populateVoices);

  // Press to talk 
  talkButton.addEventListener('click', () => {
    const msgText = textArea.value.trim();
    if (!msgText) return;                                
    if (voiceSelect.value === 'select') return;        

    const utterance = new SpeechSynthesisUtterance(msgText);

    // Apply chosen voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[Number(voiceSelect.value)];

    // Swap face while speaking 
    utterance.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
      faceImg.alt = 'Smiling face with open mouth';
    });

    utterance.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
      faceImg.alt = 'Smiling face';
    });

    speechSynthesis.speak(utterance);
  });
}
