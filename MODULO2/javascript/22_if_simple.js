const totalCompra = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalCompra;

if (totalCompra >= MINIMO_DESCUENTO) {
    const descuento = totalCompra * PORCENTAJE_DESCUENTO;
    totalFinal = totalCompra - descuento;
    console.log(`¡Felicidades! Has obtenido un descuento de $${descuento.toFixed(2)}.`);
}
console.log(`El total final de tu compra es de $${totalFinal.toFixed(2)}.`);

const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

if (stockDisponible <= UMBRAL_STOCK_BAJO) {
    console.log("¡Atención! El stock está bajo. Solo quedan " + stockDisponible + " unidades.");
}

const edadUsuario = 17;
const EDAD_MINIMA = 18;

if (edadUsuario < EDAD_MINIMA) {
    console.log("Lo siento, no puedes acceder a este contenido. Debes tener al menos " + EDAD_MINIMA + " años.");
}




