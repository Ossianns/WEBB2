let pil = document.getElementById("pil");
let navbar = document.getElementById("navbar");

let deg = 135;
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
})