
const SCREEN_WIDTH = "550px";
const SCREEN_HEIGHT = "550px";

const container = document.querySelector(".container");
container.style.width = SCREEN_WIDTH;
container.style.height = SCREEN_HEIGHT;

let divNum = 16;

function createGrid() {

    for (let row=1; row<=divNum; row++) {
        for (let col=1; col<=divNum; col++) {
            let square = document.createElement("div");
            square.style.height = (550 / divNum) + "px";
            square.style.width = (550 / divNum) + "px";
            square.classList.add("square");
            container.appendChild(square);
        }
    }
    const squares = document.getElementsByClassName("square");
    return squares
}

function changeColor(arr) {
    for (let i=0; i<arr.length; i++) {
        arr[i].addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "orange";
        }, false);
    }
}

function run() {
    const test = createGrid();
    changeColor(test);
}

run();