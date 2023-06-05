const breedDivs = document.getElementsByClassName("breed")

console.log(breedDivs)

function main() {
    for (let i = 0; i < breedDivs.length; i++) {
        breedDivs[i].children[0].addEventListener("click", () => {


            if (breedDivs[i].children[0].classList.contains("active-info-image"))
                breedDivs[i].children[0].setAttribute("class", "non-active-info-image");
            else
                breedDivs[i].children[0].setAttribute("class", "active-info-image");

            breedDivs[i].children[1].style.display = breedDivs[i].children[1].style.display === "block" ? "none" : "block";

        })
    }
}

setInterval(() => {
    main();
}, 1);
