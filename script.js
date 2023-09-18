'use strict';
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

dice.classList.add('hidden');
let number;
let curPlayerScore = 0;
let x = 0;
let currentScoreId = `#current--${x}`;
let currentPlayerClass = `.player--${x}`;
let scoreEl = document.querySelector(`#score--${x}`);
let currentTotalScore = 0;
let currentTotalScore0 = 0;
let currentTotalScore1 = 0;

const rollDice = function () {
  number = Math.trunc(Math.random() * 6) + 1;
  return number;
};

// changing Players
const changePlayers = function () {
  document.querySelector(currentPlayerClass).classList.remove('player--active');
  x = 1 - x;
  currentPlayerClass = `.player--${x}`;
  currentScoreId = `#current--${x}`;
  scoreEl = document.querySelector(`#score--${x}`);
  x == 0
    ? (currentTotalScore = currentTotalScore0)
    : (currentTotalScore = currentTotalScore1);
  document.querySelector(currentPlayerClass).classList.add('player--active');
};

rollBtn.addEventListener('click', function () {
  if (currentTotalScore >= 20) {
    return console.log('end');
  }
  rollDice();
  dice.src = `img/dice-${number}.png`;
  dice.classList.remove('hidden');
  if (number == 1) {
    curPlayerScore = 0;
    document.querySelector(currentScoreId).textContent = curPlayerScore;
    changePlayers();
  } else {
    curPlayerScore += number;
    document.querySelector(currentScoreId).textContent = curPlayerScore;
  }
});

holdBtn.addEventListener('click', function () {
  if (currentTotalScore >= 20) {
    return console.log('end');
  }
  currentTotalScore += curPlayerScore;
  scoreEl.textContent = currentTotalScore;
  curPlayerScore = 0;
  document.querySelector(currentScoreId).textContent = curPlayerScore;
  if (currentTotalScore >= 20) {
    document.querySelector(currentPlayerClass).classList.add('player--winner');
    return dice.classList.add('hidden');
  }
  x == 0
    ? (currentTotalScore0 = currentTotalScore)
    : (currentTotalScore1 = currentTotalScore);
  changePlayers();
});

newBtn.addEventListener('click', function () {
  currentTotalScore = 0;
  currentTotalScore0 = 0;
  currentTotalScore1 = 0;
  curPlayerScore = 0;
  x = 0;
  currentScoreId = `#current--${x}`;
  currentPlayerClass = `.player--${x}`;
  scoreEl = document.querySelector(`#score--${x}`);
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  dice.classList.add('hidden');
});
