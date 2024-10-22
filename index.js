let increaseButton = document.querySelector('.increase-button');
let decreaseButton = document.querySelector('.decrease-button');
let counterText = document.querySelector('.counter');
let counter = 0;

increaseButton.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
})

decreaseButton.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
})
