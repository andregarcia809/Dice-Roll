const Trigger = document.querySelector('.dice__trigger');
let dice = document.querySelector('.dice__result');
let diceNumbers = document.querySelector('.dice__image');

// Generates random numbers
function getrandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Resets animation 
function resetAnimation() {
  setTimeout(function () {
    diceNumbers.classList.remove('animate');
  }, 300);
}

// Activates roll of Dice
function rollDice() {
  Trigger.addEventListener('click', function () {
    let diceRollAudio = new Audio('roll.wav');
    let randomNumber = getrandomNumber();

    diceRollAudio.play();
    diceNumbers.setAttribute('src', 'images/dice' + randomNumber + '.png');
    diceNumbers.classList.add('animate');
    resetAnimation();

  })

}

rollDice();