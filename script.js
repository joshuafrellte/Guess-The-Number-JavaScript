const numberInput = document.getElementById('numberInput');
const guessBtn = document.getElementById('guessBtn');
const statusLbl = document.getElementById('statusLbl');

const zeroToHundBtn = document.getElementById('zeroToHundBtn');
const zeroToTwoHundBtn = document.getElementById('zeroToTwoHundBtn');
const zeroToFiveHundBtn = document.getElementById('zeroToFiveHundBtn');
const zeroToThousandBtn = document.getElementById('zeroToThousandBtn');

let randomNumber = Math.floor(Math.random() * 100);

guessBtn.onclick = function() {
    let guess = numberInput.value;
    if (isLesser(guess)) {
        statusLbl.textContent = "Lower!";
    }
    else if (isGreater(guess)) {
        statusLbl.textContent = "Higher!";
    }
    else {
        statusLbl.textContent = "YOU GOT IT!";
        statusLbl.style.color = "green";
    }
}

function isLesser(number) {
    return randomNumber < number;
}

function isGreater(number) {
    return randomNumber > number;
}

zeroToHundBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
}

zeroToTwoHundBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * 200);
    console.log(randomNumber);
}

zeroToFiveHundBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * 500);
    console.log(randomNumber);
}

zeroToThousandBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * 1000);
    console.log(randomNumber);
}

