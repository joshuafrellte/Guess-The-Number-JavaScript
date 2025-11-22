const numberInput = document.getElementById('numberInput');
const guessBtn = document.getElementById('guessBtn');
const statusLbl = document.getElementById('statusLbl');

const zeroToHundBtn = document.getElementById('zeroToHundBtn');
const zeroToTwoHundBtn = document.getElementById('zeroToTwoHundBtn');
const zeroToFiveHundBtn = document.getElementById('zeroToFiveHundBtn');
const zeroToThousandBtn = document.getElementById('zeroToThousandBtn');

const defaultStatus = statusLbl.textContent;

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

darkenActiveButton(zeroToHundBtn);

guessBtn.onclick = function() {
    guess = numberInput.value;
    processGuess(guess);
    if (guess != randomNumber) {
        clearGuess();
    }
    
}

numberInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        guessBtn.onclick();
    }
});

function isLesser(number) {
    return randomNumber < number;
}

function isGreater(number) {
    return randomNumber > number;
}

function clearGuess() {
    numberInput.value = '';
}

function processGuess(guess) {
    if (isLesser(guess)) {
        statusLbl.textContent = "Lower!";
    }
    if (isGreater(guess)) {
        statusLbl.textContent = "Higher!";
    }
    if (guess == randomNumber) {
        resetGame();
        displayVictoryStatus();
    }
}

function displayVictoryStatus() {
    statusLbl.textContent = "YOU GOT IT!";
    statusLbl.style.color = "green";
    statusLbl.style.animation = "boing 0.5s ease-in-out 10 alternate";
    numberInput.style.color = "green";

}

function resetGame() {
    setTimeout(() => {
        statusLbl.textContent = defaultStatus;
        statusLbl.style.color = "black";
        numberInput.style.color = "black";
        clearGuess();
    }, 5000);
}

function darkenActiveButton(btn) {
    let buttons = document.querySelectorAll('#difficultyPanel button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
        
    });
    btn.classList.add('active');
    console.log(btn.className);
}

zeroToHundBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * 100);
    clearGuess();
    console.log(randomNumber);
    darkenActiveButton(this);
}

zeroToTwoHundBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * 200);
    clearGuess();
    console.log(randomNumber);
    darkenActiveButton(this);
}

zeroToFiveHundBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * 500);
    clearGuess();
    console.log(randomNumber);
    darkenActiveButton(this);
}

zeroToThousandBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * 1000);
    clearGuess();
    console.log(randomNumber);
    darkenActiveButton(this);
}

