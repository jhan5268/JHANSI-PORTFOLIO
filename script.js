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


/* MOBILE HAMBURGER MENU */

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: #9cc9ff;
    font-size: 28px;
    cursor: pointer;
}

@media (max-width: 768px) {

    body {
        padding: 25px 6%;
    }

    .navbar {
        position: sticky;
        top: 10px;
        padding: 14px 18px;
        margin-bottom: 25px;
    }

    .logo {
        font-size: 24px;
    }

    .menu-toggle {
        display: block;
        margin-left: auto;
    }

    .nav-links {
        display: none;

        position: absolute;
        top: 70px;
        left: 0;
        right: 0;

        flex-direction: column;
        gap: 0;

        background: rgba(11, 15, 25, 0.97);
        backdrop-filter: blur(18px);

        border: 1px solid rgba(156, 201, 255, 0.18);
        border-radius: 14px;

        padding: 10px;
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links li {
        width: 100%;
    }

    .nav-links a {
        display: block;
        width: 100%;
        padding: 13px 15px;
        font-size: 16px;
    }

    .nav-links a:hover {
        background: rgba(156, 201, 255, 0.08);
        border-radius: 8px;
    }

}
