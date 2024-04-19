let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const colorBtn = document.getElementById('color-btn');
const body = document.body;

// Verificar si hay un color almacenado en localStorage
const storedColor = localStorage.getItem('backgroundColor');
if (storedColor) {
    body.style.backgroundColor = storedColor;
}

colorBtn.addEventListener('click', () => {
    let newColor;
    if (body.style.backgroundColor === 'rgb(84, 84, 84)') {
        newColor = ''; // Restaurar el color original
        colorBtn.textContent = 'Cambiar Color';
    } else {
        newColor = 'rgb(84, 84, 84)';
        colorBtn.textContent = 'Restaurar Color';
    }
    body.style.backgroundColor = newColor;
    
    // Almacenar el color en localStorage
    localStorage.setItem('backgroundColor', newColor);
});