let pil = document.getElementById("pil");
let navbar = document.getElementById("navbar");
let text = document.getElementById("text");
let pildiv = document.getElementById("pildiv");

//


//detta
x = 0

pil.addEventListener("click", () => {

    // test
    console.log("klick")

    // vilkor som gör så att man kan klicka flera gånger och få olika resultat
    if (x == 0) {
        // får pilen att snurra 180 grader
        gsap.fromTo(".pil", { duration: 1, rotation: 45 }, { duration: 1, rotation: 225 });

        // får navbaren att försvinna åt vänster
        gsap.to(".navbar", { duration: 0.5, x: "-130%" });

        // ändrar text-div:en till grid row 3 så att den hamnar på navbarens plats när den försvinner
        text.style.gridRow = "3";

        // ändrar pilen till flex start så att den stannar i linje med var navbaren var
        pildiv.style.alignItems = "flex-start";

        //detta
        x = x + 1
    } else if (x == 1) {
        gsap.fromTo(".pil", { duration: 1, rotation: 225 }, { duration: 1, rotation: 45 });
        gsap.to(".navbar", { duration: 0.5, x: "0%" });

        // ändrar tillbaka text-div:en så att den hamnar på grid-row:en under navbaren
        text.style.gridRow = "4";

        // fixar så att pilen hamnar på rätt plats när den går tillbaka till sin ursprungliga position
        pildiv.style.alignItems = "center";

        //detta
        x = x - 1
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