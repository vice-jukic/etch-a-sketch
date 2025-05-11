
const tag = document.querySelector(".container");
const size = 16;

function grid() {

    for (let i=1; i<=size; i++) {
        for (let j=1; j<=size; j++) {
            let div = document.createElement("div");
            div.classList.add("test");
            tag.appendChild(div);
        }
    }
}

grid();