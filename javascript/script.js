// Ejemplo de interacción: Cambiar color del corazón al hacer clic
document.querySelector('.heart-love').addEventListener('click', function() {
    this.style.color = '#ff0000';
    this.style.transition = 'color 0.3s';
});

// Si no necesitas JS, puedes omitir este archivo.