document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Ajoutez ici d'autres fonctionnalités JavaScript pour améliorer l'expérience utilisateur
});
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
      }, 1000); // Temps de la transition d'opacité
    }, 3000); // Durée de l'écran de chargement
  });
  