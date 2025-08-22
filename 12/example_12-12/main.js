const btn = document.querySelector("button");

const boxes = [...document.querySelectorAll(".box")];

btn.addEventListener("click", () => {
    boxes.map((box) => {
        box.classList.toggle("show");
    });
});
