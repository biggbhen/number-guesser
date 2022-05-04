// game function
// -player must guess a certain number btw a min and a max
// -player gets a certain amount of guesses
// -Notify player of guesses remaining
// -Notify the player of the correct answer if player loses
// -let player choose to play again

// game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
  UIminNum = document.querySelector('.min-num'),
  UImaxNum = document.querySelector('.max-num'),
  UIguessInput = document.querySelector('#guess-input'),
  UImessage = document.querySelector('.message'),
  UIguessBtn = document.querySelector('#guess-btn');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// listen for guess
UIguessBtn.addEventListener('click', function () {
  let guess = Number(UIguessInput.value);
  if (guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max} `, 'red');
  }

  // check if won
  if (guess === winningNum) {
    // gameover Won!
    // disble input
    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // game over you lost
      UIguessInput.disabled = true;
      UIguessInput.style.borderColor = 'red';
      setMessage(
        `Game over, YOU Lost!. The correct number was ${winningNum}`,
        'red'
      );
    } else {
      // game continues answer is wrong
      UIguessInput.style.borderColor = 'red';
      // clear guess input
      UIguessInput.value = '';
      setMessage(
        `${guess} is not Correct!, ${guessesLeft} guesses left`,
        'red'
      );
    }
  }
});

function setMessage(msg, color) {
  UImessage.textContent = msg;
  UImessage.style.color = color;
}
