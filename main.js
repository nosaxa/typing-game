const word = document.querySelector("#word");
const text = document.querySelector("#text");
const timeEl = document.querySelector("#time");
const scoreEl = document.querySelector("#score");
const settingsBtn = document.querySelector("#settings-btn");
const settingsForm = document.querySelector("#settings-form");
const settingsDifficulty = document.querySelector("#difficulty");
const endGameEl = document.querySelector("#end-game-container");

// List of words for the game
const words = [
  'plastic',
  'cub',
  'regret',
  'error',
  'rail',
  'cap',
  'zoo',
  'grade',
  'alien',
  'system',
  'basket',
  'sea',
  'shirt',
  'beach',
  'swim',
  'daughter',
  'quince',
  'limit',
  'picture',
  'sunset',
  'basketball',
  'computer',
  'development',
  'javascript'
];

// Starting conditions
let currentWord;
let score = 0;
let time = 10;

// Generate random word from array
const getRandomWord = () => {
    return words[Math.trunc(Math.random() * words.length) + 1];
}

// Add word to DOM
const addWordToDOM = () => {
    currentWord = getRandomWord();
    word.innerHTML = currentWord;
}

// Update score
const updateScore = () => {
    score++;
    scoreEl.innerHTML = score;
}

addWordToDOM();

// Event listeners

text.addEventListener('input', function(e) {
    console.log(e.target.value);
    const insertedText = e.target.value;

    if(insertedText === currentWord) {
        updateScore();
        addWordToDOM();

        // Clear
        e.target.value = '';

    }
})