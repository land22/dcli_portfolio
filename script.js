// Validation de formulaire pour la page de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupération des valeurs des champs
        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const message = contactForm.querySelector('#message').value.trim();

        // Validation simple des champs
        if (name === '' || email === '' || message === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Simulation d'envoi de formulaire (à remplacer avec votre code d'envoi réel)
        alert('Formulaire soumis avec succès.');
        contactForm.reset(); // Réinitialise le formulaire
    });
});