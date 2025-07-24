const body = document.body;

const quote = document.getElementById("quote");

// Controls
const size = document.getElementById("size");
const opacity = document.getElementById("opacity");
const speed = document.getElementById("speed");
const distance = document.getElementById("distance");

// Handle the Radio button clicks and set a Custom Property
function handleRadio(thisRadio) {
    document.documentElement.style.setProperty("--pos", thisRadio.value);
}

function handleText(input) {
    document.documentElement.style.setProperty("--size", `${input.value}em`);
    input.parentElement.querySelector(
        ".readout"
    ).textContent = `${input.value}em`;
}

function handleSpeed(input) {
    document.documentElement.style.setProperty("--speed", `${input.value}s`);
    input.parentElement.querySelector(
        ".readout"
    ).textContent = `${input.value}s`;
}

function handleOpacity(input) {
    document.documentElement.style.setProperty("--opacity", `${input.value}`);
    input.parentElement.querySelector(
        ".readout"
    ).textContent = `${input.value}`;
}

// Bool to prevent adding multiples
let boxInDom = false;

// Create the element to add
const box = document.createElement("div");
box.classList.add("box");
box.textContent = "He could talk a glass eye to sleep...";

const addQuote = () => {
    if (boxInDom) {
        box.remove();
        boxInDom = false;
    }
    body.append(box);
    boxInDom = true;
};

quote.addEventListener("click", addQuote);
