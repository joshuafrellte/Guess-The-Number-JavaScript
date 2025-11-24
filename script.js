const numberInput = document.getElementById('numberInput');
const guessBtn = document.getElementById('guessBtn');
const statusLbl = document.getElementById('statusLbl');

const zeroToHundBtn = document.getElementById('zeroToHundBtn');
const zeroToFiveHundBtn = document.getElementById('zeroToFiveHundBtn');
const zeroToThousandBtn = document.getElementById('zeroToThousandBtn');
const zeroToTenThousandBtn = document.getElementById('zeroToTenThousandBtn');

const defaultStatus = statusLbl.textContent;

let attempts = 0;

let currentMax = 100;
let randomNumber = generateRandom(currentMax);
console.log(`Max ${currentMax}: ${randomNumber}`);

darkenActiveButton(zeroToHundBtn);

function generateRandom(max) {
    return Math.floor(Math.random() * max);
}

guessBtn.onclick = function() {
    guess = numberInput.value;
    processGuess(guess);
    if (guess !== randomNumber) {
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
        displayVictoryStatus();
        resetGameAfterTimeout();
    }
    if (guess == '') {
        statusLbl.textContent = "Enter a guess first!";
    }
    attempts++;
}

function displayVictoryStatus() {
    statusLbl.textContent = `YOU GOT IT! Took ${attempts} attempts!`;
    statusLbl.style.color = "green";
    statusLbl.style.animation = "boing 0.5s ease-in-out infinite alternate";
    numberInput.style.color = "green";
    attempts = 0;

}

function resetGameAfterTimeout() {
    setTimeout(() => {resetGame()}, 5000);
}

function resetGame() {
    statusLbl.textContent = defaultStatus;
    statusLbl.style.color = "black";
    numberInput.style.color = "black";
    statusLbl.style.animation = "none";
    randomNumber = generateRandom(currentMax);
    console.log(randomNumber);
    clearGuess();
}

function darkenActiveButton(btn) {
    let buttons = document.querySelectorAll('#difficultyPanel button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    btn.classList.add('active');
}

zeroToHundBtn.onclick = function() {
    currentMax = 100;
    randomNumber = generateRandom(currentMax);
    clearGuess();
    console.log(`Max ${currentMax}: ${randomNumber}`);
    darkenActiveButton(this);
}

zeroToFiveHundBtn.onclick = function() {
    currentMax = 500;
    randomNumber = generateRandom(currentMax);
    clearGuess();
    console.log(`Max ${currentMax}: ${randomNumber}`);
    darkenActiveButton(this);
}

zeroToThousandBtn.onclick = function() {
    currentMax = 1000;
    randomNumber = generateRandom(currentMax);
    clearGuess();
    console.log(`Max ${currentMax}: ${randomNumber}`);
    darkenActiveButton(this);
}

zeroToTenThousandBtn.onclick = function() {
    currentMax = 10000;
    randomNumber = generateRandom(currentMax);
    clearGuess();
    console.log(`Max ${currentMax}: ${randomNumber}`);
    darkenActiveButton(this);
}

// fix victory animatin timings