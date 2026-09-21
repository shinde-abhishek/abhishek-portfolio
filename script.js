```javascript
// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .focus-item, .stat-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});
```
