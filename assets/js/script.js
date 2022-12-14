const cards = document.querySelectorAll('.memory-card');
const moveContainer = document.querySelector(".moves");

let gameOn = false;
let perfectMatch = 0;
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let finalTime = "";

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  if(lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;

  checkForMatch();
}

function checkCardMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  if (isMatch) perfectMatch += 1;

  if (isMatch) pairMatch();
  else noMatch();

  if (perfectMatch === MAX_MATCH) winGame();
}


function pairMatch() {
 
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function noMatch() {
  lockBoard = true;

  setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
  }, 900);

  // Add move
  addMove();
}

moves = 0;
moveContainer.innerHtml = 0;

function addMove() {
    moves++;
    moveContainer.innerHTML = moves;
}








//timer
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;
timeContainer.innerHTML = "Time " + minutes + " : " + seconds;

function timer() {
  time = setInterval(function () {
    seconds++;
    if (seconds === 59) {
      minutes++;
      seconds = 0;
    }
    timeContainer.innerHTML = "Time " + minutes + " : " + seconds;
  }, 1000);
}


function shuffle() {
  cards.forEach(cards => {
      let randomPosition = Math.floor(Math.random() * 16);
      cards.style.order = randomPosition;
  });

}

function resetBoard() {
  [flippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}