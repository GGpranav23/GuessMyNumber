'use strict';


// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent); 

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//NOTE: Event listener

// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber


let score = 20;

// We select the button with the class 'check' and add an click event listener to it.The function inside the event listener is the event handler that will be executed when the button is clicked.

// When the button is clicked, we log the value of the input filed with class "guess" to the console.
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    // document.querySelector('.message').textContent = '🎉 Correct Number!';

    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number!';
    }else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        
    }else if(guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 'Your guess is too high!';

        // Decrease score when the guess is wrong
        score--;
        // Display the score back to the user
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You lose!'
        }
    }else if(guess < secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 'Your guess is too low!';
        // Decrease score when the guess is wrong
        score--;
        // Display the score back to the user
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You lose!'
        }
    }
})


// Event for again button

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = null;
    // Value of an input is always a string, so thats why the empty string value can also be assigned to reset.
    // document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').style.width = '15rem';
    
})