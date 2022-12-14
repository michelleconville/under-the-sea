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

function time() {


}

function shuffle() {

}


function reset() {

}