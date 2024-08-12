const bouton = document.getElementById('myButton');
const paragraphe = document.querySelector('p');

bouton.addEventListener('click', function() {
    paragraphe.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});