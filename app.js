
const SCREEN_SIZE = 550;

const container = document.querySelector(".container");
const button = document.querySelector(".change-grid")
container.style.width = SCREEN_SIZE + "px";
container.style.height = SCREEN_SIZE + "px";

let divNum = 16;

function createGrid(divNum) {

    for (let row=1; row<=divNum; row++) {
        for (let col=1; col<=divNum; col++) {
            let square = document.createElement("div");
            square.style.height = (SCREEN_SIZE / divNum) + "px";
            square.style.width = (SCREEN_SIZE / divNum) + "px";
            square.classList.add("square");
            container.appendChild(square);
        }
    }
    const squares = document.getElementsByClassName("square");
    return squares
}

function removeGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
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

    button.addEventListener("click", () => {
        let newSize

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
        removeGrid();
        const newGrid = createGrid(newSize);
        changeColor(newGrid);
    });
}


const test = createGrid(divNum);
changeColor(test);
newGrid();
