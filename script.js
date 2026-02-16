
// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector(".theme-toggle");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        button.textContent = "LIGHT MODE";
        localStorage.setItem("theme", "dark");
    } else {
        button.textContent = "DARK MODE";
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme preference
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.querySelector(".theme-toggle");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        button.textContent = "LIGHT MODE";
    }
});


window.addEventListener("DOMContentLoaded", () => {
  const char = SakanaWidget.getCharacter("takina");

  char.image = "https://tr.rbxcdn.com/180DAY-da2a8c29538f715d22ad0b1a439a573d/420/420/WaistAccessory/Webp/noFilter";

  SakanaWidget.registerCharacter("custom", char);

  new SakanaWidget({
    character: "custom",
    draggable: true,
    controls: false
  }).mount("#sakana-root");
});




