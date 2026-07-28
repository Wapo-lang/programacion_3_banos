const costoOfrenda = 150;
const MINIMO_PARA_DESCUENTO = 100;
const PORCENTAJE_REDUCCION = 0.10;

let costoFinalRitual = costoOfrenda;


if (costoOfrenda >= MINIMO_PARA_DESCUENTO) {
    
    const deduccion = costoOfrenda * PORCENTAJE_REDUCCION;
    costoFinalRitual = costoOfrenda - deduccion;
    
    console.log(`📜 ¡Concesión otorgada! Reducción de aranceles: $${deduccion.toFixed(2)}.`);
}



console.log(`El tributo final determinado es de $${costoFinalRitual.toFixed(2)}.`);



const nichosDisponibles = 3;
const UMBRAL_CRITICO_ESPACIO = 5;


if (nichosDisponibles <= UMBRAL_CRITICO_ESPACIO) {
    
    console.warn(`⚠️ Alerta Logística: Capacidad reducida. Solo quedan ${nichosDisponibles} nichos en el sector.`);
}



const edadIniciante = 17;
const EDAD_MINIMA_PERMITIDA = 18;

if (edadIniciante < EDAD_MINIMA_PERMITIDA) {
    console.error(`❌ Acceso denegado: Se requieren ${EDAD_MINIMA_PERMITIDA} años terrenales para entrar al Osario.`);
}