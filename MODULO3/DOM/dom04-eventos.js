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
}); 