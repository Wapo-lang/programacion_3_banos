const campo1= document.getElementById("campo1");
const campo2= document.getElementById("campo2");
const boton= document.getElementById("calcular");
const resultado= document.getElementById("resultado");
boton.addEventListener("click", function() {
    const base = parseFloat(campo1.value);
    const altura = parseFloat(campo2.value);
    const area = (base * altura) / 2;
    resultado.textContent = "El área del triángulo es: " + area;
});