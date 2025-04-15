const body = document.body;
const header = body.querySelector(".Header");

header.addEventListener("click", () => {
	body.classList.toggle("OffCanvas-Active");
});
