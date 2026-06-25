// Registro de Guardianes y Empleados Espectrales en la Cripta
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
            <td>🪙 ${empleado.salario.toFixed(2)}</td>
            <td>
                <button onclick="editarEmpleado(${empleado.id})" style="background-color: #4c1d95; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Editar</button>
                <button onclick="eliminarEmpleado(${empleado.id})" style="background-color: #7f1d1d; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Eliminar</button>      
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
        alert("👻 Por favor, complete todos los campos del guardián.");
        return;
    }

    const nuevoEmpleado = {
        id: productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1,
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
        agregarbtn.style.backgroundColor = "#d97706";
        agregarbtn.removeEventListener("click", agregarEmpleado);
        agregarbtn.addEventListener("click", actualizarEmpleado);
    }
};

function actualizarEmpleado() {
    const nombreInput = document.getElementById("nombre").value.trim();
    const apellidoInput = document.getElementById("apellido").value.trim();
    const salarioInput = document.getElementById("salario").value.trim();

    if (!nombreInput || !apellidoInput || !salarioInput) {
        alert("👻 Por favor, complete todos los campos del guardián.");
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
        agregarbtn.style.backgroundColor = "#7c3aed";
        agregarbtn.removeEventListener("click", actualizarEmpleado);
        agregarbtn.addEventListener("click", agregarEmpleado);
        idEditar = null;
    }
};

function cancelarEdicion() {
    limpiarFormulario();
    agregarbtn.textContent = "Agregar Empleado";
    agregarbtn.style.backgroundColor = "#7c3aed";
    agregarbtn.removeEventListener("click", actualizarEmpleado);
    agregarbtn.addEventListener("click", agregarEmpleado);
    idEditar = null;
};

// Vinculación opcional del botón cancelar con la función de cancelar edición si se requiere
document.getElementById("btnCancelar").addEventListener("click", cancelarEdicion);

function eliminarEmpleado(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
        if(confirm("🪦 ¿Está seguro de que desea desterrar a este empleado de la cripta?")) {
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
    
    // Verificación segura si existen los elementos de estadísticas en el HTML
    const elTotal = document.getElementById('totalEmpleados');
    const elPromedio = document.getElementById('salarioPromedio');
    const elCaro = document.getElementById('empleadoMasCaro');
    const elBarato = document.getElementById('empleadoMasBarato');

    if (elTotal) elTotal.textContent = totalEmpleados;
    if (elPromedio) elPromedio.textContent = "🪙 " + salarioPromedio;

    const empleadoMasCaroObj = productos.length > 0 ? productos.reduce((prev, current) => (prev.salario > current.salario) ? prev : current) : null;
    const empleadoMasBaratoObj = productos.length > 0 ? productos.reduce((prev, current) => (prev.salario < current.salario) ? prev : current) : null;

    if (elCaro) elCaro.textContent = empleadoMasCaroObj ? `${empleadoMasCaroObj.nombre} ${empleadoMasCaroObj.apellido} (🪙${empleadoMasCaroObj.salario})` : "N/A";
    if (elBarato) elBarato.textContent = empleadoMasBaratoObj ? `${empleadoMasBaratoObj.nombre} ${empleadoMasBaratoObj.apellido} (🪙${empleadoMasBaratoObj.salario})` : "N/A";
};

window.onload = function() {
    renderEmpleados();
};