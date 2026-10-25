let count=0;

const counterValue = document.getElementById('counter-value');

function updateCounter(){
    counterValue.textContent=count;
}

const btnIncrease=document.getElementById('btn-increase');
btnIncrease.addEventListener('click', function(){
    count=count+1;
    updateCounter();
});

const btnDecrease=document.getElementById('btn-decrease');

btnDecrease.addEventListener('click', function () {   
  if (count > 0) {                                    
    count = count - 1;
  }                                                   
  updateCounter();
});  

const btnReset = document.getElementById('btn-reset');

btnReset.addEventListener('click', function () {
  count = 0;
  updateCounter();
});

// Task 7. Live text preview
const textInput = document.getElementById('text-input');
const preview = document.getElementById('preview');
const charCount = document.getElementById('char-count');

const PLACEHOLDER = 'Your text will appear here';

function updatePreview(){
    const value=textInput.value;

    if(value===''){
        preview.textContent=PLACEHOLDER;
    } else {
        preview.textContent=value;
    }
    charCount.textContent=value.length;
}
textInput.addEventListener('input', updatePreview);

const btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', function () {
  textInput.value = '';
  updatePreview();
});

// Task 8. Form validation
const imageSelect = document.getElementById('image-select');
const sceneImage = document.getElementById('scene-image');
const sceneCaption = document.getElementById('scene-caption');

const scenes = {
  mountain: { src: 'images/mountain.jpg', alt: 'Green mountains under the blue sky', caption: 'Mountains' },
  sea:      { src: 'images/sea.jpg',      alt: 'The blue sea ', caption: 'Sea' },
  forest:   { src: 'images/forest.jpg',   alt: 'Green pine trees in a forest',    caption: 'Forest' }
};

function showScene(key) {
  const scene = scenes[key];
  sceneImage.src = scene.src;
  sceneImage.alt = scene.alt;
  sceneCaption.textContent = scene.caption;
}

imageSelect.addEventListener('change', function () {
  showScene(imageSelect.value);
});

showScene(imageSelect.value);

// Task 9. Form validation
const keyInput = document.getElementById('key-input');
const keyStatus = document.getElementById('key-status');
const keyResult = document.getElementById('key-result');

keyInput.addEventListener('keydown', function (event) {
  keyStatus.textContent = 'Key pressed: ' + event.key;
});

keyInput.addEventListener('keydown', function (event) {
  keyStatus.textContent = 'Key pressed: ' + event.key;

  if (event.key === 'Enter') {
    event.preventDefault();
    keyResult.textContent = keyInput.value;
  } else if (event.key === 'Escape') {
    keyInput.value = '';
    keyResult.textContent = '';
  }
});

// Task 10. Focus and blur events

const card = document.getElementById('focus-card');
const instruction = document.getElementById('card-instruction');
const DEFAULT_TEXT = 'Move the mouse over the card or press Tab to focus it.';

function highlightOn(message) {
  card.classList.add('highlight');
  instruction.textContent = message;
}

function highlightOff() {
  card.classList.remove('highlight');
  instruction.textContent = DEFAULT_TEXT;
}

card.addEventListener('mouseenter', function () {
  highlightOn('The mouse is over the card (mouseenter).');
});

card.addEventListener('mouseleave', highlightOff);

card.addEventListener('focus', function () {
  highlightOn('The card has keyboard focus (focus).');
});

card.addEventListener('blur', highlightOff);