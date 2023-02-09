const word = document.querySelector("#word");
const text = document.querySelector("#text");
let timeEl = document.querySelector("#time");
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

// Assign difficulty. The default is medium
let difficulty = localStorage.getItem('difficulty') === null ? 'medium' : localStorage.getItem('difficulty');

// Change the text select option, depeding on value of difficulty
settingsDifficulty.value = localStorage.getItem('difficulty') === null ? 'medium' : localStorage.getItem('difficulty');

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

// Game over, show the message
const gameOver = () => {
    endGameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your score is ${score}</p>
    <button onclick="window.location.reload()">Reload</button>
    `;
    endGameEl.style.display = 'flex';
}

// Callback function for timeInterval
const updateTime = () => {
    time --;
    timeEl.innerHTML = `${time}s`;

    if (time === 0) {
        clearInterval(timeInterval);

        gameOver();
    }
}

// Update time
const timeInterval = setInterval(updateTime, 1000);

addWordToDOM();

// Event listeners

// Typing event
text.addEventListener('input', function(e) {
    const insertedText = e.target.value;

    if(insertedText === currentWord) {
        updateScore();
        addWordToDOM();

        // Clear
        e.target.value = '';

        // Add time when guessed the word
        if(difficulty === 'hard') time += 1;
        if(difficulty === 'medium') time += 3;
        if(difficulty === 'easy') time += 5;
    }
});

// Settings btn click
settingsBtn.addEventListener('click', function() {
    settings.classList.toggle('hide');
})

// Settings difficulty
settingsDifficulty.addEventListener('change', function(e) {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})

