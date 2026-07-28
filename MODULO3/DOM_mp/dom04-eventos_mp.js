document.addEventListener("DOMContentLoaded", function() {
    alert("🕯️ ¡El cementerio del DOM ha abierto sus puertas por completo!");

    function agregarProducto() {
        const lista = document.getElementById("lista.productos1");
        const nuevoProducto = document.createElement("li");
        nuevoProducto.textContent = "👻 Alma errante invocada";
        lista.appendChild(nuevoProducto);
    }

    document.getElementById("btn3").addEventListener("click", function() {
        const lista2 = document.getElementById("lista.productos1");
        const nuevoProducto = document.createElement("li");
        nuevoProducto.textContent = "💀 Sombra errante registrada";
        lista2.appendChild(nuevoProducto);
    });

    document.getElementById('campo').addEventListener('input', function() {
        console.log('🔮 Poder del conjuro actual:', document.getElementById('campo').value);
    });

    document.getElementById('campo_actualizar_parrafo').addEventListener('input', function() {
        const valorCampo = document.getElementById('campo_actualizar_parrafo').value;
        document.getElementById('parrafo').textContent = valorCampo !== "" ? valorCampo : "Epitafio inicial en silencio";
    }); 
});