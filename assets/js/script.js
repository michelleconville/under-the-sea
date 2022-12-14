const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
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

function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? disableCards() : unflipCards();

}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetGameBoard();
}








function matched() {

}



function unmatched() {

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

}


function reset() {

}