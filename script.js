// Sélectionne le bouton et le menu
const toggleBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Ajoute un clic pour ouvrir/fermer
toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

