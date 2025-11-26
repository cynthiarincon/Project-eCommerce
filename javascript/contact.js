window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop page reload

        // Replace everything inside the form with a simple message
        form.innerHTML = "I will get back to you as soon as I can, thank you!";
    });
});
