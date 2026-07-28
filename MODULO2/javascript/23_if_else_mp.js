const horaActual = 14;

if (horaActual < 16) {
    console.log("🌞 El sol baña las lápidas: Es de día en el camposanto.");
} else {
    console.log("🌙 Los espectros se levantan: Es de noche en la necrópolis.");
}



const ingresoMensual = 800;
const deudaActual = 200;
const INGRESO_MINIMO = 600;
const RATIO_DEUDA_MAXIMO = 0.4; 


const ratioDeuda = deudaActual / ingresoMensual;


if (ingresoMensual >= INGRESO_MINIMO && ratioDeuda <= RATIO_DEUDA_MAXIMO) {
    console.log("⚖️ Tribunal Financiero: Concesión de cripta aprobada.");
    console.log(`📊 Ratio deuda/ingreso óptimo: ${(ratioDeuda * 100).toFixed(1)}%`);
} else {
    
    console.error("❌ Tribunal Financiero: Concesión denegada por alto riesgo.");
    console.log(`Requisitos -> Ingreso mínimo: $${INGRESO_MINIMO} | Ratio máximo: 40%`);
    console.log(`Estado actual -> Ingreso: $${ingresoMensual} | Ratio: ${(ratioDeuda * 100).toFixed(1)}%`);
}



const contrasenaIngresada = "Segura123";
const contrasenaCorrecta  = "Segura123";
let intentosFallidos      = 0;
const MAX_INTENTOS        = 3;


if (contrasenaIngresada === contrasenaCorrecta) {
    console.log("🔑 Sello roto. Autenticación exitosa. Bienvenido al archivo.");
} else {
    intentosFallidos++; 
    const intentosRestantes = MAX_INTENTOS - intentosFallidos;
    console.warn(`🚨 Contraseña profana incorrecta. Intentos restantes en el plano terrenal: ${intentosRestantes}`);
}



const capturarEntrada = require("prompt-sync")();

const cantidadProductosTexto = capturarEntrada("Escribe la cantidad de reliquias a retirar: ");
console.log(`Has seleccionado ${cantidadProductosTexto} elementos del inventario.`);


const cantidadProductos = Number(cantidadProductosTexto) || 0;

if (cantidadProductos >= 10) {
    console.log("🔮 Bendición otorgada: Descuento por lote aplicado a la tasa.");
} else {
    console.log("📜 Tasa estándar aplicada. Sin beneficios de lote.");
}