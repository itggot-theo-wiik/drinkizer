function bg_color() {
    var random_number = Math.random();

    console.log(random_number);

    element = document.querySelector(".changg");
    console.log(element)
    element.classList.add(".cyan");

    // if (random_number < 0.33) {
    //     console.log("Litet");
    // }
    // else if (0.33 < random_number && random_number < 0.66) {
    //     console.log("mellan");
    // }
    // else {
    //     console.log("största!!");
    // }
}

window.onload = bg_color();