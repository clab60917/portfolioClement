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
