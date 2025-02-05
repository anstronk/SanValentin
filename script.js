const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');
const h1 = document.querySelector('#pregunta');

let fontSize = 2;

let messages = [
    'Está segura?',
    'Piénselo bien',
    '¿Segurita segurita?',
    '¿100% seguraaa?',
    'Te doy otra oportunidad',
    '¿1500% seguraaa?'
];

buttonNo.addEventListener('click', () => {
    // Aumentar el tamaño del botón "Sí"
    fontSize++;
    buttonYes.style.fontSize = `${fontSize}rem`;

    // Cambiar el mensaje aleatorio
    const indexRandom = Math.floor(Math.random() * messages.length);
    h1.textContent = messages[indexRandom];

    // Obtener el tamaño de la ventana y el botón
    const maxX = window.innerWidth - buttonNo.offsetWidth - 20; // Resta un margen
    const maxY = window.innerHeight - buttonNo.offsetHeight - 20; // Resta un margen
    
    // Evitar que el botón salga de la pantalla
    const nuevaX = Math.max(10, Math.random() * maxX);
    const nuevaY = Math.max(10, Math.random() * maxY);
    
    buttonNo.style.position = 'absolute'; // Asegurar que tenga posición absoluta
    buttonNo.style.left = `${nuevaX}px`;
    buttonNo.style.top = `${nuevaY}px`;
});

// Evento para cuando se presiona "Sí"
buttonYes.addEventListener('click', () => {
    document.querySelector('#message').style.display = 'flex';
});
