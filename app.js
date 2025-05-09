
function idk() {
    const tag = document.querySelector(".container");

    for (let i=0; i<16; i++) {
        let div = document.createElement("div");
        div.classList.add("test");

        tag.appendChild(div);
    }
}

idk();