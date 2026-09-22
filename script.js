// =====================================
// MOBILE NAVIGATION
// =====================================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

        }
    );

}


// =====================================
// CLOSE MOBILE MENU
// =====================================

const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );

            }

        }
    );

});


// =====================================
// CURRENT YEAR
// =====================================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


// =====================================
// ACTIVE NAVIGATION
// =====================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );


function updateNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 160;


        if (
            window.scrollY >=
            sectionTop
        ) {

            currentSection =
                section.getAttribute(
                    "id"
                );

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove(
            "active"
        );


        const href =
            link.getAttribute("href");


        if (
            href ===
            `#${currentSection}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateNavigation
);


// =====================================
// REVEAL ANIMATIONS
// =====================================

const animatedElements =
    document.querySelectorAll(
        ".case-study, .pipeline-step, .stack-group, .interview-card"
    );


if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    animatedElements.forEach(
        (element) => {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(
                element
            );

        }
    );

}


// =====================================
// ESCAPE KEY
// =====================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );

            }

        }

    }
);


// =====================================
// INITIAL STATE
// =====================================

updateNavigation();