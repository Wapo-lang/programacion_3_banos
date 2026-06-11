const productos = [
{ 
    id: 1,
    nombre: "Carlos",
    apellido: "Baños", 
    salario: 830 
},
{ 
    id: 2, 
    nombre: "Juan", 
    apellido: "Carrasco",
    salario: 450 
},
{ 
    id: 3, 
    nombre: "Andrea", 
    apellido: "García",
    salario: 250 
}
];

function renderEmpleados() {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    productos.forEach(empleado => {
        const empleadoElement = document.createElement("tr");
        empleadoElement.innerHTML = `
            <td>${empleado.id}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>${empleado.salario.toFixed(2)}</td>
            <td>
                <button onclick="editarEmpleado(${empleado.id})">Editar</button>
                <button onclick="eliminarEmpleado(${empleado.id})">Eliminar</button>      
            </td>
        `;
        cuerpoTabla.appendChild(empleadoElement);
    });
    actualizarEstadisticas();
};

function agregarEmpleado() {
    const nombreInput = document.getElementById("nombre").value.trim();
    const apellidoInput = document.getElementById("apellido").value.trim();
    const salarioInput = document.getElementById("salario").value.trim();

    if (!nombreInput || !apellidoInput || !salarioInput) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const nuevoEmpleado = {
        id: productos.length + 1,
        nombre: nombreInput,
        apellido: apellidoInput,
        salario: parseFloat(salarioInput)
    };

    productos.push(nuevoEmpleado);
    renderEmpleados();

    limpiarFormulario();
};

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("salario").value = "";
};

const agregarbtn = document.getElementById("btnAgregar");
agregarbtn.addEventListener("click", agregarEmpleado);

let idEditar = null;
function editarEmpleado(id) {
    const empleado = productos.find(p => p.id === id);
    if (empleado) {
        document.getElementById("nombre").value = empleado.nombre;
        document.getElementById("apellido").value = empleado.apellido;
        document.getElementById("salario").value = empleado.salario;
        idEditar = id;
        agregarbtn.textContent = "Actualizar Empleado";
        agregarbtn.removeEventListener("click", agregarEmpleado);
        agregarbtn.addEventListener("click", actualizarEmpleado);
    }
};

function actualizarEmpleado() {
    const nombreInput = document.getElementById("nombre").value.trim();
    const apellidoInput = document.getElementById("apellido").value.trim();
    const salarioInput = document.getElementById("salario").value.trim();

    if (!nombreInput || !apellidoInput || !salarioInput) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const empleadoIndex = productos.findIndex(p => p.id === idEditar);
    if (empleadoIndex !== -1) {
        productos[empleadoIndex] = {
            id: idEditar,
            nombre: nombreInput,
            apellido: apellidoInput,
            salario: parseFloat(salarioInput)
        };
        renderEmpleados();
        limpiarFormulario();
        agregarbtn.textContent = "Agregar Empleado";
        agregarbtn.removeEventListener("click", actualizarEmpleado);
        agregarbtn.addEventListener("click", agregarEmpleado);
        idEditar = null;
    }
};

function cancelarEdicion() {
    limpiarFormulario();
    agregarbtn.textContent = "Agregar Empleado";
    agregarbtn.removeEventListener("click", actualizarEmpleado);
    agregarbtn.addEventListener("click", agregarEmpleado);
    idEditar = null;
};

function eliminarEmpleado(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
        if(confirm("¿Está seguro de que desea eliminar este empleado?")) {
            productos.splice(index, 1);
            renderEmpleados();
        }  
    }
};

function actualizarEstadisticas() {
    const totalEmpleados = productos.length;
    let salarioPromedio = 0;
    if (totalEmpleados > 0) {
        salarioPromedio = (productos.reduce((sum, p) => sum + p.salario, 0) / totalEmpleados).toFixed(2);
    }
    document.getElementById('totalEmpleados')
        .textContent = totalEmpleados;
    document.getElementById('salarioPromedio')
        .textContent = salarioPromedio;
    const empleadoMasCaro = productos.length > 0 ?
        Math.max(...productos.map(p => p.salario)) : 0;
    const empleadoMasBarato = productos.length > 0 ?
        Math.min(...productos.map(p => p.salario)) : 0;
    document.getElementById('empleadoMasCaro')
        .textContent = empleadoMasCaro;
    document.getElementById('empleadoMasBarato')
        .textContent = empleadoMasBarato;
};

window.onload = function() {
    renderEmpleados();
    document.getElementById("btnAgregar").addEventListener("click", agregarEmpleado);
    document.getElementById("btnCancelar").addEventListener("click", limpiarFormulario);
};