const btn = document.querySelector("#deal");
let dealt = 0;

btn.addEventListener("click", () => {
    const cards = Array.from(document.querySelectorAll(".card:not(.dealt)"));
    let nextCard = cards[cards.length - 1];
    dealt++;
    nextCard.style.zIndex = dealt;
    nextCard.style.viewTransitionName = `name-${dealt}`;
    document.startViewTransition(() => {
        nextCard.classList.add("dealt");
    });
});
