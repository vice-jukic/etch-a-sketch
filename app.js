
const SCREEN_SIZE = 550;

const container = document.querySelector(".container");
const resizeButton = document.querySelector(".change-grid");
const clearButton = document.querySelector(".clear-grid");


container.style.width = SCREEN_SIZE + "px";
container.style.height = SCREEN_SIZE + "px";

let gridSize = 16;
let currentGridSize = gridSize;

function createGrid(gridSize) {

    for (let row=1; row<=gridSize; row++) {
        for (let col=1; col<=gridSize; col++) {
            let square = document.createElement("div");
            square.style.height = (SCREEN_SIZE / gridSize) + "px";
            square.style.width = (SCREEN_SIZE / gridSize) + "px";
            square.classList.add("square");
            container.appendChild(square);
        }
    }
    const squares = document.getElementsByClassName("square");
    return squares
}

function removeGrid() {
    const square = document.querySelectorAll(".square");
    square.forEach(square => square.remove());
}

function clearGrid() {
    removeGrid();
    const makeGrid = createGrid(currentGridSize);
    changeColor(makeGrid);
}

function handleClear() {
    clearButton.addEventListener("click", () => {
        clearGrid();
    })
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r},${g},${b})`;

    return color;
}

function changeColor(arr) {
    for (let i=0; i<arr.length; i++) {
        arr[i].addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = randomColor();
        }, false);
    }
}

function newGrid() {

    resizeButton.addEventListener("click", () => {
        let newSize;

        while (true) {
            newSize = parseInt(prompt("Enter a new size for the grid (1-100):"));

            if(!isNaN(newSize)) {
                if (newSize >= 1 && newSize <= 100) {
                    break;
                } else if (newSize <= 0) {
                    alert("Your input must be a positive integer!");
                } else if (newSize > 100) {
                    alert("Your input must be below 100!");
                }
            } else {
                alert("You must input a number:")
            }
        }

        currentGridSize = newSize;

        removeGrid();
        const makeGrid = createGrid(newSize);
        changeColor(makeGrid);
    });
}

function run() {
    const creation = createGrid(gridSize);
    changeColor(creation);
    newGrid();
    handleClear();
}

run();