window.addEventListener("DOMContentLoaded", () => {
    // Taking elements from HTML / Variables
    const slider = document.querySelector(".slider"),
        active = document.querySelector(".active"),
        line1 = document.querySelector(".line1"),
        line2 = document.querySelector(".line2"),
        line3 = document.querySelector(".line3"),
        line4 = document.querySelector(".line4"),
        line5 = document.querySelector(".line5"),
        container = document.querySelector(".container");

    // Layouting
    line1.addEventListener("click", () => {
        slider.style.transform = "translateX(0)";
        active.style.top = 0;
        container.style.background = "linear-gradient(45deg, #22046b, #e14e42)";
    })

    line2.addEventListener("click", () => {
        slider.style.transform = "translateX(-20%)";
        active.style.top = "80px";
        container.style.background = "#c4d719"
    })

    line3.addEventListener("click", () => {
        slider.style.transform = "translateX(-40%)";
        active.style.top = "160px";
        container.style.background = "#195bd7"
    })

    line4.addEventListener("click", () => {
        slider.style.transform = "translateX(-60%)";
        active.style.top = "240px";
        container.style.background = "#19d762"
    })

    line5.addEventListener("click", () => {
        slider.style.transform = "translateX(-80%)";
        active.style.top = "320px";
        container.style.background = "crimson"
    })
})