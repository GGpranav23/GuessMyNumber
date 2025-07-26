'use strict';


// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent); 

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//NOTE: Event listener


// We select the button with the class 'check' and add an click event listener to it.The function inside the event listener is the event handler that will be executed when the button is clicked.

// When the button is clicked, we log the value of the input filed with class "guess" to the console.
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    document.querySelector('.message').textContent = '🎉 Correct Number!';

    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
})
