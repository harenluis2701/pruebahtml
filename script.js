// 1. Buscamos el botón y el menú en el HTML
const burguer = document.querySelector('.burguer');
const navegacion = document.querySelector('.menu-navegacion');

// 2. Le decimos al botón que escuche cuando hagamos click
burguer.addEventListener('click', () => {
    
    // 3. El interruptor: Agrega o quita la clase "activo"
    burguer.classList.toggle('activo');
    navegacion.classList.toggle('activo');
    
});