let pil = document.getElementById("pil");
let navbar = document.getElementById("navbar");

y = "hej"

x = 0

pil.addEventListener("click", () => {

    console.log("klick")

    if (x == 0) {
        gsap.fromTo(".pil", { duration: 1, rotation: 0 }, { duration: 1, rotation: 180 });


        x = x + 1
        console.log(x)
        console.log(y)
    } else if (x == 1) {

        x = x - 1
        console.log(x)
    }
})












/* let deg = 135;
let operator = "-";

pil.addEventListener("click", () => {


    pil.style.transform = "rotate(" + operator + deg + "deg)";
    if (deg == 135) {
        deg = 45;

        operator = "+";

        navbar.style.display = "none";
        pil.style.gridColumn = "1 / 2";
    } else {
        deg = 135;
        operator = "-";

        pil.style.gridColumn = "10 / 11";
        navbar.style.display = "inline-block";
        navbar.style.display = "flex";
    }
    console.log("hej");
}) */