// Lógica para el Cálculo de Sueldo y Rol de Pagos

function calcularSueldo() {
    // Capturar elementos del DOM
    const inSueldoBase = document.getElementById('inSueldoBase');
    const inBonoAntiguedad = document.getElementById('inBonoAntigüedad');
    const inIESS = document.getElementById('inIESS');
    const inPrestamo = document.getElementById('inPrestamo');
    
    const divError = document.getElementById('error');
    const divResultado = document.getElementById('resultado');

    // Obtener valores numéricos (si están vacíos, se asume 0 por defecto)
    const sueldoBase = parseFloat(inSueldoBase.value) || 0;
    const bonoAntiguedad = parseFloat(inBonoAntiguedad.value) || 0;
    const porcentajeIESS = parseFloat(inIESS.value) || 0;
    const prestamo = parseFloat(inPrestamo.value) || 0;

    // Validaciones
    if (sueldoBase <= 0) {
        mostrarError("Por favor, ingrese un sueldo base válido mayor a 0.");
        return;
    }

    if (porcentajeIESS < 0 || porcentajeIESS > 100) {
        mostrarError("El porcentaje del IESS debe estar entre 0% y 100%.");
        return;
    }

    if (bonoAntiguedad < 0 || prestamo < 0) {
        mostrarError("Los valores de bonos y préstamos no pueden ser negativos.");
        return;
    }

    // Ocultar error si todo es correcto
    divError.style.display = 'none';

    // Realizar cálculos
    const totalIngresos = sueldoBase + bonoAntiguedad;
    const montoIESS = (sueldoBase * porcentajeIESS) / 100;
    const totalDeducciones = montoIESS + prestamo;
    const sueldoNeto = totalIngresos - totalDeducciones;

    // Rellenar datos en el rol de pagos
    document.getElementById('rSueldoBase').textContent = `$${sueldoBase.toFixed(2)}`;
    document.getElementById('rBono').textContent = `$${bonoAntiguedad.toFixed(2)}`;
    document.getElementById('rTotalIngresos').textContent = `$${totalIngresos.toFixed(2)}`;
    
    document.getElementById('rPorcentajeIESS').textContent = porcentajeIESS;
    document.getElementById('rIESS').textContent = `-$${montoIESS.toFixed(2)}`;
    document.getElementById('rPrestamo').textContent = `-$${prestamo.toFixed(2)}`;
    document.getElementById('rTotalDeducciones').textContent = `-$${totalDeducciones.toFixed(2)}`;
    
    document.getElementById('rSueldoNeto').textContent = `$${sueldoNeto.toFixed(2)}`;

    // Mostrar el contenedor de resultados
    divResultado.style.display = 'block';
}

function mostrarError(mensaje) {
    const divError = document.getElementById('error');
    const divResultado = document.getElementById('resultado');
    
    divError.textContent = mensaje;
    divError.style.display = 'block';
    divResultado.style.display = 'none';
}

function limpiar() {
    // Limpiar campos de entrada
    document.getElementById('inSueldoBase').value = '';
    document.getElementById('inBonoAntigüedad').value = '';
    document.getElementById('inIESS').value = '9.45';
    document.getElementById('inPrestamo').value = '';

    // Ocultar errores y resultados
    document.getElementById('error').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
}