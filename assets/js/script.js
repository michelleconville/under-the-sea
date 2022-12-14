 // Variables
 const cards = document.querySelectorAll('.memory-card');
 const moveContainer = document.querySelector(".moves");
 const timeContainer = document.querySelector(".timer");
 const MAX_MATCH = 8;
 
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
 
 /*
 onclick function for cards
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
 
 /*
 checking if firstCard & secondCard are a match
 */
 function checkCardMatch() {
     let isMatch = firstCard.dataset.image === secondCard.dataset.image;
     if (isMatch) perfectMatch += 1;
 
     if (isMatch) pairMatch();
     else noMatch();
 
     if (perfectMatch === MAX_MATCH) winGame();
 }
 
 // matched cards will be disabled for clicks once they are flipped
 function pairMatch() {
 
     firstCard.removeEventListener('click', flipCard);
     secondCard.removeEventListener('click', flipCard);
     resetBoard();
 }
 
 // board is locked until cards are flipped back if no match
 function noMatch() {
     lockBoard = true;
 
     setTimeout(() => {
         firstCard.classList.remove('flip');
         secondCard.classList.remove('flip');
 
         resetBoard();
     }, 900);
 
     
     addMove();
 }
 
 //Move counter
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
     time = setInterval(function() {
         seconds++;
         if (seconds === 59) {
             minutes++;
             seconds = 0;
         }
         timeContainer.innerHTML = "Time " + minutes + " : " + seconds;
     }, 1000);
 }
 
 function stopTime() {
     clearInterval(time);
 }
 
  // Card shuffle
 function shuffle() {
     cards.forEach(cards => {
         let randomPosition = Math.floor(Math.random() * 16);
         cards.style.order = randomPosition;
     });
 
 }
 
 //cards are reset after each round
 function resetBoard() {
     [flippedCard, lockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
 }