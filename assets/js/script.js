 // Variables
 const cards = document.querySelectorAll('.memory-card');
 const moveContainer = document.querySelector(".moves");
 const timeContainer = document.querySelector(".timer");
 const rules = document.getElementById('rules');
 const finish = document.getElementById('finish');
 const max_match = 8;

 let gameOn = false;
 let perfectMatch = 0;
 let flippedCard = false;
 let lockBoard = false;
 let firstCard, secondCard;
 let moves = 0;
 let finalTime = "";

 // Events
 cards.forEach(card => card.addEventListener('click', flipCard));
 shuffle();


 /**
  *  Onclick function for cards
  */
 function flipCard() {
     if (!gameOn) {
         gameOn = true;
         timer();
     }
     if (lockBoard) return;
     if (this === firstCard) return;

     this.classList.add('flip');

     if (!flippedCard) {

         flippedCard = true;
         firstCard = this;

         return;

     }

     secondCard = this;

     checkCardMatch();
 }

 /**
  *  Checking if firstCard & secondCard are a match
  */
 function checkCardMatch() {
     let isMatch = firstCard.dataset.image === secondCard.dataset.image;
     if (isMatch) perfectMatch += 1;

     if (isMatch) pairMatch();
     else noMatch();

     if (perfectMatch === max_match) finishGame();
 }

 /**
  *  Matched cards will be disabled once they are flipped
  */
 function pairMatch() {

     firstCard.removeEventListener('click', flipCard);
     secondCard.removeEventListener('click', flipCard);
     resetBoard();
 }

 /**
  *  Board is locked until cards are flipped back if no match
  */
 function noMatch() {
     lockBoard = true;

     setTimeout(() => {
         firstCard.classList.remove('flip');
         secondCard.classList.remove('flip');

         resetBoard();
     }, 700);


     addMove();
 }

 /**
  *  Moves counter
  */
 function addMove() {
     moves++;
     moveContainer.innerHTML = moves;
 }

 //Timer
 let time;
 let minutes = 0;
 let seconds = 0;
 let timeStart = false;

 /**
  *  Timer counter
  */
 function timer() {
     time = setInterval(function () {
         seconds++;
         if (seconds === 59) {
             minutes++;
             seconds = 0;
         }
         timeContainer.innerHTML = "time " + minutes + " : " + seconds;
     }, 1000);
 }

 function stopTime() {
     clearInterval(time);
 }

 /**
  *  Card shuffle
  */
 function shuffle() {
     cards.forEach(cards => {
         let randomPosition = Math.floor(Math.random() * 16);
         cards.style.order = randomPosition;
     });

 }

 /**
  *  Cards are reset after each round
  */
 function resetBoard() {
     [flippedCard, lockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
 }

 // Restart Button 
 let restartBtn = document.getElementById('restart');
if(restartBtn){
    restartBtn.addEventListener('click', restart);
}

 /**
  *  Restart button to reset the board, timer and moves counters
  */
 function restart() {
     setTimeout(() => {
         flippedCard = false;
         [firstCard, secondCard] = [null, null];
         stopTime();
         gameOn = false;
         timeStart = false;
         seconds = 0;
         minutes = 0;
         timeContainer.innerHTML = "Timer 0:00";
         moves = 0;
         moveContainer.innerHTML = 0;
         perfectMatch = 0;
         cards.forEach(cardReset => cardReset.classList.remove('flip'));
         shuffle();
         cards.forEach(card => card.addEventListener('click', flipCard));
     }, 500);

 }

 //Open rules modal
 let modalBtn = document.getElementById("modalBtn");
 let closeBtn = document.getElementById("closeBtn");

 modalBtn.addEventListener('click', showRules);
 closeBtn.addEventListener('click', closeRules);

 function showRules() {
     rules.style.display = "block";
 }

 function closeRules() {
     rules.style.display = "none";
 }

 /**
  *  Game over function
  */
 function finishGame() {
     stopTime();
     showfinishMessage();
 }


 /**
  *  Finish message modal
  */
 function showfinishMessage() {
     finish.style.display = "block";
     finalTime = timeContainer.innerHTML;
     // showing moves and time on modal
     document.getElementById("finalMove").innerHTML = moves;
     document.getElementById("totalTime").innerHTML = finalTime;
     restart();
 }


 // Removing Click to start overlay text
 if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

 /**
  *  Function to remove overlay text
  */
 function ready() {
     let Overlay = document.getElementById('overlay-text');
     Overlay.addEventListener('click', removeOverlay);

     function removeOverlay() {
         let element = document.getElementById("overlay-text");
         element.classList.remove("visible");
     }
 }