document.addEventListener("DOMContentLoaded", function() {
    alert("¡El DOM ha sido completamente cargado!");

    function agregarProducto() {
        const lista = document.getElementById("lista.productos1");
        const nuevoProducto = document.createElement("li");
        nuevoProducto.textContent = "Nuevo Producto";
        lista.appendChild(nuevoProducto);
    }

    document.getElementById("btn3").addEventListener("click", function() {
        const lista2 = document.getElementById("lista.productos1");
        const nuevoProducto = document.createElement("li");
        nuevoProducto.textContent = "Otro Producto";
        lista2.appendChild(nuevoProducto);
    });

    document.getElementById('campo').addEventListener('input', function() {
        console.log('Valor del campo: ' , document.getElementById('campo').value);
    });

    document.getElementById('campo_actualizar_parrafo').addEventListener('input', function() {
        const valorCampo = document.getElementById('campo_actualizar_parrafo').value;
        document.getElementById('parrafo').textContent = valorCampo;
    }); 
}); 