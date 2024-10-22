let increaseButton = document.querySelector('.increase-button');
let decreaseButton = document.querySelector('.decrease-button');
let counterText = document.querySelector('.counter');
let counter = 1;

increaseButton.addEventListener('click', function() {
    counter++;
    counterText.innerText = counter;
})

decreaseButton.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
})
