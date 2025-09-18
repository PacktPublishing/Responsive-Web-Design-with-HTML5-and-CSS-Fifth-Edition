const body = document.body;
const allSections = [...body.querySelectorAll("section")];
const ss = document.styleSheets[0];

// store whether we have a card active and which card
let hasActive = {
    active: false,
    idx: 0,
};

allSections.map((section, idx) => {
    const name = section.querySelector(".name");
    const notes = section.querySelector(".notes");
    const connectivity = section.querySelector(".connectivity");
    const switches = section.querySelector(".switches");
    const keys = section.querySelector(".keys");
    const image = section.querySelector(".image");
    const manufacturer = section.querySelector(".manufacturer");
    section.addEventListener("click", () => handleClick(section, idx));
    section.style.setProperty(`--viewTransitionName`, `section-${idx}`);
    name.style.setProperty(`--viewTransitionName`, `titleName-${idx}`);
    connectivity.style.setProperty(
        `--viewTransitionName`,
        `connectivity-${idx}`
    );
    switches.style.setProperty(`--viewTransitionName`, `switches-${idx}`);
    keys.style.setProperty(`--viewTransitionName`, `keys-${idx}`);
    image.style.setProperty(`--viewTransitionName`, `image-${idx}`);
    manufacturer.style.setProperty(
        `--viewTransitionName`,
        `manufacturer-${idx}`
    );
    notes.style.setProperty(`--viewTransitionName`, `notes-${idx}`);
    ss.insertRule(
        `::view-transition-old(section-${idx}),::view-transition-new(section-${idx}) {height: 100%;}`
    );
});

function handleClick(section, idx) {
    // its open already, user clicks it again
    if (hasActive.active && hasActive.idx === idx) {
        hasActive.active = false;
        hasActive.idx = 0;
        document.startViewTransition(() => {
            section.classList.remove("active");
        });
    } else if (!hasActive.active) {
        // nothing already active
        hasActive.idx = idx;
        hasActive.active = true;
        document.startViewTransition(() => {
            section.classList.add("active");
        });
    } else if (hasActive.active && hasActive.idx !== idx) {
        // already active but clicking a different one
        return;
    }
    // handle the z-index issue
    allSections.map((section) => (section.style.zIndex = "1"));
    section.style.zIndex = "100";
}
