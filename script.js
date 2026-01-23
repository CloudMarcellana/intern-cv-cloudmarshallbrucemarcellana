// welcome
window.onload = function () {
    alert("Hi! I'm Cloud Marcellana, Welcome!");
};

// dark mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
});

// color change button for header
const colorBtn = document.getElementById("colorBtn");
const header = document.querySelector("header");

const colors = ["blue", "green", "yellow", "red"];
let colorIndex = 0;

// clicks
let clickCount = 0;
const counterDisplay = document.getElementById("clickCounter");

colorBtn.addEventListener("click", () => {
    colorIndex = (colorIndex + 1) % colors.length;
    header.style.backgroundColor = colors[colorIndex];

    clickCount++;
    counterDisplay.textContent = "Clicks: " + clickCount;
});

// Show/Hide buttnon
const toggleButtons = document.querySelectorAll(".toggleBtn");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.previousElementSibling;

        if (content.style.display === "none") {
            content.style.display = "block";
            button.textContent = "Hide";
        } else {
            content.style.display = "none";
            button.textContent = "Show";
        }
    });
});
