// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO 

  // DOM REFS
  const hornSelect = document.getElementById('horn-select');          
  const volumeSlider = document.getElementById('volume');                
  const volumeIcon = document.querySelector('#volume-controls img');  
  const hornImage = document.querySelector('#expose img');          
  const playButton = document.querySelector('#expose button');     
  const audioElem = document.querySelector('#expose audio');        

  // Confetti instance 
  const jsConfetti = new JSConfetti();

  // Horn selection
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;         

    // Swap image
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = `${horn.replace('-', ' ')} image`;

    // Swap audio
    audioElem.src = `assets/audio/${horn}.mp3`;
  });

  // Volume slider 
  volumeSlider.addEventListener('input', () => {
    const value = Number(volumeSlider.value);    // 0‑100

    // Update volume (range 0.0‑1.0)
    audioElem.volume = value / 100;

    // Update volume icon
    let level = 3;        // default >= 67
    if (value === 0) level = 0;
    else if (value < 33) level = 1;
    else if (value < 67) level = 2;
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // Play button 
  playButton.addEventListener('click', () => {
    audioElem.play();

    // Confetti for party horn
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
