// HEADER COM BLUR AO SCROLL
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

// REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".about-card, .service-card, .project-card, .process-card, .section-title"
);

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// SCROLL SUAVE DOS LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}); 