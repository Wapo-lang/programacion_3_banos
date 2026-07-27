const productos = [
{ 
    id: 1,
    nombre: "Teclado",
    descripcion: "Teclado mecánico con retroiluminación RGB", 
    precio: 10 
},
{ 
    id: 2, 
    nombre: "Mouse", 
    descripcion: "Mouse óptico con sensor de alta precisión",
    precio: 20 
},
{ 
    id: 3, 
    nombre: "Monitor", 
    descripcion: "Monitor de 24 pulgadas con resolución Full HD",
    precio: 30 
}
];

function renderProductos() {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    productos.forEach(producto => {
        const productoElement = document.createElement("tr");
        productoElement.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio.toFixed(2)}</td>
            <td>
                <button onclick="editarProducto(${producto.id})">Editar</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>      
            </td>
        `;
        cuerpoTabla.appendChild(productoElement);
    });
    actualizarEstadisticas();
};

function agregarProducto() {
    const nombreInput = document.getElementById("nombre").value.trim();
    const descripcionInput = document.getElementById("descripcion").value.trim();
    const precioInput = document.getElementById("precio").value.trim();

    if (!nombreInput || !descripcionInput || !precioInput) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: nombreInput,
        descripcion: descripcionInput,
        precio: parseFloat(precioInput)
    };

    productos.push(nuevoProducto);
    renderProductos();

    limpiarFormulario();
};

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
};

const agregarbtn = document.getElementById("btnAgregar");
agregarbtn.addEventListener("click", agregarProducto);

let idEditar = null;
function editarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        document.getElementById("nombre").value = producto.nombre;
        document.getElementById("descripcion").value = producto.descripcion;
        document.getElementById("precio").value = producto.precio;
        idEditar = id;
        agregarbtn.textContent = "Actualizar Producto";
        agregarbtn.removeEventListener("click", agregarProducto);
        agregarbtn.addEventListener("click", actualizarProducto);
    }
};

function actualizarProducto() {
    const nombreInput = document.getElementById("nombre").value.trim();
    const descripcionInput = document.getElementById("descripcion").value.trim();
    const precioInput = document.getElementById("precio").value.trim();

    if (!nombreInput || !descripcionInput || !precioInput) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const productoIndex = productos.findIndex(p => p.id === idEditar);
    if (productoIndex !== -1) {
        productos[productoIndex] = {
            id: idEditar,
            nombre: nombreInput,
            descripcion: descripcionInput,
            precio: parseFloat(precioInput)
        };
        renderProductos();
        limpiarFormulario();
        agregarbtn.textContent = "Agregar Producto";
        agregarbtn.removeEventListener("click", actualizarProducto);
        agregarbtn.addEventListener("click", agregarProducto);
        idEditar = null;
    }
};

function cancelarEdicion() {
    limpiarFormulario();
    agregarbtn.textContent = "Agregar Producto";
    agregarbtn.removeEventListener("click", actualizarProducto);
    agregarbtn.addEventListener("click", agregarProducto);
    idEditar = null;
};

function eliminarProducto(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
        if(confirm("¿Está seguro de que desea eliminar este producto?")) {
            productos.splice(index, 1);
            renderProductos();
        }  
    }
};

function actualizarEstadisticas() {
    const totalProductos = productos.length;
    let precioPromedio = 0;
    if (totalProductos > 0) {
        precioPromedio = (productos.reduce((sum, p) => sum + p.precio, 0) / totalProductos).toFixed(2);
    }
    document.getElementById('totalProductos')
        .textContent = totalProductos;
    document.getElementById('precioPromedio')
        .textContent = precioPromedio;
    const productoMasCaro = productos.length > 0 ?
        Math.max(...productos.map(p => p.precio)) : 0;
    const productoMasBarato = productos.length > 0 ?
        Math.min(...productos.map(p => p.precio)) : 0;
    document.getElementById('productoMasCaro')
        .textContent = productoMasCaro;
    document.getElementById('productoMasBarato')
        .textContent = productoMasBarato;
};

window.onload = function() {
    renderProductos();
    document.getElementById("btnAgregar").addEventListener("click", agregarProducto);
    document.getElementById("btnCancelar").addEventListener("click", limpiarFormulario);
};