const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


const hiddenElements = document.querySelectorAll(".reveal");

hiddenElements.forEach((element) => {
    observer.observe(element);
});

const roles = [
    "Artificial Intelligence",
    "Generative AI",
    "Machine Learning",
    "LLM Applications"
];

const typingElement = document.getElementById("typing-role");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    const typingSpeed = deleting ? 45 : 85;

    setTimeout(typeRole, typingSpeed);
}

typeRole();


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
