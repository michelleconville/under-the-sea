const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    }
}

cards.forEach(card => card.addEventListener('click', flipCard)); 








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
     time = setInterval(function() {
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