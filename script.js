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
