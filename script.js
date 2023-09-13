let playerTotal = 0;
let dealerTotal = 0;
let player;
let dealer;
let stayCheckVar = 0;
let dealerBlackjack = 0;
let playerBlackjack = 0;

let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
document.querySelector('.js-player-total').innerHTML = playerTotal;
document.querySelector('.js-dealer-total').innerHTML = dealerTotal;

function startGame (){
    let random1 = Math.floor(Math.random() * deck.length);
    let random2 = Math.floor(Math.random() * deck.length);
    document.querySelector('.js-player-total').innerHTML = playerTotal;
    document.querySelector('.js-dealer-total').innerHTML = dealerTotal;
   if (playerTotal === 0 && dealerTotal === 0){
    playerTotal = deck[random1];
    dealerTotal = deck[random2];
   } 
};

function playGame(){
    let random1 = Math.floor(Math.random() * deck.length);
    if (playerTotal <= 21){
        playerBlackjackCheck();
        playerTotal = playerTotal + deck[random1];
        document.querySelector('.js-player-total').innerHTML = playerTotal;
    } if (playerTotal > 21){
        outcomeVariable = document.querySelector('.outcome').classList.add('js-outcome');
        document.querySelector('.js-results').innerHTML = 'Bust!';
    } 
};

let addComputerTotalInterval;

function addComputerTotal (){
    addComputerTotalInterval = setInterval(function(){
        if (i = dealerTotal, i < 17, i++){
            let random1 = Math.floor(Math.random() * deck.length);
            dealerTotal = dealerTotal + deck[random1];
            document.querySelector('.js-dealer-total').innerHTML = dealerTotal;
            if(dealerTotal >= 17){
                determineWinner();
            } 
        }
    }, 2000)
};

function dealerBlackjackCheck(){  
    if(dealerTotal === 21 && dealerBlackjack === 0){
        dealerBlackjack = 1;
        document.querySelector('.js-results').innerHTML = 'Dealer Blackjack!';
    } else if (dealerBlackjack === 0){
        dealerBlackjack = 1;
    }
};

function playerBlackjackCheck(){
    if(playerTotal === 21 && playerBlackjack === 0){
        playerBlackjack = 1;
        document.querySelector('.js-results').innerHTML = 'Player Blackjack!';
    } else if (playerBlackjack === 0){
        playerBlackjack = 1;
    }
}

let outcomeVariable;

function determineWinner(){
    stayCheckVar = 1
    clearInterval(addComputerTotalInterval);
   outcomeVariable = document.querySelector('.outcome').classList.add('js-outcome');
   dealerBlackjackCheck();
   if (dealerBlackjack === 1){
    if (dealerTotal > 21){
        document.querySelector('.js-results').innerHTML = 'Dealer bust!';
    } else if (dealerTotal > playerTotal){
        document.querySelector('.js-results').innerHTML = 'You lose!';
    } else if (dealerTotal < playerTotal){
        document.querySelector('.js-results').innerHTML = 'You win!';
    } else if (dealerTotal === playerTotal){
        document.querySelector('.js-results').innerHTML = 'Push.';
    }}};

function resetGame(){
    playerTotal = 0;
    dealerTotal = 0;
    stayCheckVar = 0;
    dealerBlackjack = 0;
    playerBlackjack = 0;
    document.querySelector('.js-player-total').innerHTML = playerTotal;
    document.querySelector('.js-dealer-total').innerHTML = dealerTotal;
    document.querySelector('.outcome').classList.remove('js-outcome');
}

const resetButton = document.querySelector('.js-reset-button');

document.querySelector('.js-start-button')
.addEventListener('click', ()=> startGame());

document.querySelector('.js-hit-button')
.addEventListener('click', ()=>{
if (playerTotal > 0 && playerTotal < 21){
    playGame();
};
});

document.querySelector('.js-stay-button')
.addEventListener('click', ()=>{
if (stayCheckVar === 0 && playerTotal > 0 && playerTotal < 21){    
    addComputerTotal();
}
});

resetButton.addEventListener('click', function(){
   resetGame();
});