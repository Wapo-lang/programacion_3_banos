// Segundo ejemplo: Orbe espectral arrastrable y cambio de color místico
const circulo = document.getElementById('circulo');
let colores = ['#ef4444', '#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899']; // Tonos tétricos y brillantes
let colorActual = 0;

let arrastrando = false;

// Cambiar color espectral
function cambiarColor() {
   colorActual = (colorActual + 1) % colores.length;
   circulo.style.background = colores[colorActual];
   circulo.style.boxShadow = `0 0 20px ${colores[colorActual]}`;
}

// Mover el círculo al punto (centrado)
function moverCirculo(x, y) {
   const container = document.getElementById('container');
   const containerRect = container.getBoundingClientRect();
   const circuloRect = circulo.getBoundingClientRect();
   const mitadAncho = circuloRect.width / 2;
   const mitadAlto = circuloRect.height / 2;

   const offsetTop = containerRect.top + window.scrollY;
   const offsetLeft = containerRect.left + window.scrollX;

   circulo.style.left = (x - offsetLeft - mitadAncho) + 'px';
   circulo.style.top = (y - offsetTop - mitadAlto) + 'px';
}

// Touch Events
circulo.addEventListener('touchstart', (e) => {
   e.preventDefault();
   cambiarColor();
   arrastrando = true;
});

document.addEventListener('touchmove', (e) => {
   if (!arrastrando) return;
   const touch = e.touches[0];
   moverCirculo(touch.pageX, touch.pageY);
});

document.addEventListener('touchend', () => {
   arrastrando = false;
});

// Mouse Events
circulo.addEventListener('mousedown', (e) => {
   e.preventDefault();
   cambiarColor();
   arrastrando = true;
});

document.addEventListener('mousemove', (e) => {
   if (!arrastrando) return;
   moverCirculo(e.clientX, e.clientY);
});

document.addEventListener('mouseup', () => {
   arrastrando = false;
});