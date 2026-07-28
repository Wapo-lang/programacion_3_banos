// Inventario de Reliquias y Almas en la Cripta (CRUD de Productos)
const productos = [
{ 
    id: 1,
    nombre: "Cáliz Maldito",
    descripcion: "Cáliz de plata oscura con inscripciones prohibidas", 
    precio: 150 
},
{ 
    id: 2, 
    nombre: "Tome Espectral", 
    descripcion: "Libro de hechizos encuadernado en pergamino antiguo",
    precio: 300 
},
{ 
    id: 3, 
    nombre: "Orbe de la Cripta", 
    descripcion: "Esfera de cristal que brilla en la oscuridad total",
    precio: 450 
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
            <td>🪙 ${producto.precio.toFixed(2)}</td>
            <td>
                <button onclick="editarProducto(${producto.id})" style="background-color: #4c1d95; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Editar</button>
                <button onclick="eliminarProducto(${producto.id})" style="background-color: #7f1d1d; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Eliminar</button>      
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
        alert("👻 Por favor, complete todos los campos de la cripta.");
        return;
    }

    const nuevoProducto = {
        id: productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1,
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
        agregarbtn.textContent = "Actualizar Reliquia";
        agregarbtn.style.backgroundColor = "#d97706";
        agregarbtn.removeEventListener("click", agregarProducto);
        agregarbtn.addEventListener("click", actualizarProducto);
    }
};

function actualizarProducto() {
    const nombreInput = document.getElementById("nombre").value.trim();
    const descripcionInput = document.getElementById("descripcion").value.trim();
    const precioInput = document.getElementById("precio").value.trim();

    if (!nombreInput || !descripcionInput || !precioInput) {
        alert("👻 Por favor, complete todos los campos de la cripta.");
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
        agregarbtn.textContent = "Registrar Reliquia";
        agregarbtn.style.backgroundColor = "#7c3aed";
        agregarbtn.removeEventListener("click", actualizarProducto);
        agregarbtn.addEventListener("click", agregarProducto);
        idEditar = null;
    }
};

function cancelarEdicion() {
    limpiarFormulario();
    agregarbtn.textContent = "Registrar Reliquia";
    agregarbtn.style.backgroundColor = "#7c3aed";
    agregarbtn.removeEventListener("click", actualizarProducto);
    agregarbtn.addEventListener("click", agregarProducto);
    idEditar = null;
};

// Vinculación opcional del botón cancelar con la función de cancelar edición si se requiere
document.getElementById("btnCancelar").addEventListener("click", cancelarEdicion);

function eliminarProducto(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
        if(confirm("🪦 ¿Está seguro de que desea desterrar esta reliquia de la cripta?")) {
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
        .textContent = "🪙 " + precioPromedio;
    
    // Encontrar nombres o valores de más caro / más barato según prefieras, manteniendo el valor numérico original o adaptado
    const productoMasCaroObj = productos.length > 0 ? productos.reduce((prev, current) => (prev.precio > current.precio) ? prev : current) : null;
    const productoMasBaratoObj = productos.length > 0 ? productos.reduce((prev, current) => (prev.precio < current.precio) ? prev : current) : null;

    document.getElementById('productoMasCaro')
        .textContent = productoMasCaroObj ? `${productoMasCaroObj.nombre} (🪙${productoMasCaroObj.precio})` : "N/A";
    document.getElementById('productoMasBarato')
        .textContent = productoMasBaratoObj ? `${productoMasBaratoObj.nombre} (🪙${productoMasBaratoObj.precio})` : "N/A";
};

window.onload = function() {
    renderProductos();
};