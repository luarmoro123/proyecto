/*aparesca y desaparesca el menu*/
let posicionAnterior = window.scrollY;

const menu = document.getElementById('menu');

window.addEventListener('scroll',() => {
    const posicionActual = window.scrollY;

    if(posicionActual > posicionAnterior && window.scrollY > 50){
        menu.style.display = 'none';
    }
    else if(posicionActual < posicionAnterior){
        menu.style.display = 'flex';
    }
    posicionAnterior = posicionActual;
});
/* fin aparesca y desaparesca el menu*/