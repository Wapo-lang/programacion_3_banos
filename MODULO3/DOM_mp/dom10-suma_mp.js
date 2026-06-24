const campoNumero1 = document.getElementById('campoNumero1');
const campoNumero2 = document.getElementById('campoNumero2');
const btnSumar = document.getElementById('btn_sumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', function() {
   const numero1 = parseFloat(campoNumero1.value);
   const numero2 = parseFloat(campoNumero2.value);
   const suma = numero1 + numero2;
   
   const li = document.createElement('li');
   li.textContent = `🔮 Suma total de almas: ${isNaN(suma) ? "Inválido" : suma}`;
   li.style.cssText = "background: #131c2e; border: 1px solid #374151; padding: 10px 14px; margin-top: 10px; border-radius: 6px; max-width: 300px; color: #34d399; font-weight: bold;";
   
   resultado.innerHTML = ""; 
   resultado.appendChild(li);
});