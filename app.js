
const container = document.querySelector(".container");
const size = 16;

function grid() {

    for (let i=1; i<=size; i++) {
        for (let j=1; j<=size; j++) {
            let square = document.createElement("div");
            square.classList.add("test");
            container.appendChild(square);
        }
    }


}

grid();

const test = document.getElementsByClassName("test");

for (let i=0; i<test.length; i++) {
    test[i].addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "orange";
    }, false);
}