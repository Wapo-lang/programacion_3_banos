const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = '#fbbf24'; 
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = '#131c2e'; 
});
caja.addEventListener('click', () => {
    alert('👻 ¡Has perturbado el reposo de la caja encantada!');
});

const area = document.getElementById('areaTouch');

area.addEventListener('touchstart', () => {
    area.style.backgroundColor = '#064e3b'; 
});
area.addEventListener('touchend', () => {
    area.style.backgroundColor = '#1e1b4b'; 
});