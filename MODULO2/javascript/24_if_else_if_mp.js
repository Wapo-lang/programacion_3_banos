const temperaturaCripta = 28; 


if (temperaturaCripta >= 35) {
    console.log("🌡️ Calor extremo en los hornos. Evitar actividad al aire libre.");
} else if (temperaturaCripta >= 25) {
    
    console.log("☀️ Temperatura cálida en el camposanto. Condiciones ideales para exteriores.");
} else if (temperaturaCripta >= 15) {
    console.log("🌤️ Temperatura agradable en los mausoleos. Llevar una chaqueta ligera.");
} else if (temperaturaCripta >= 5) {
    console.log("🧥 Temperatura fría en las catacumbas. Abrigarse bien.");
} else {
    console.log("❄️ Temperatura bajo cero en el osario. Riesgo de heladas.");
}



const capturarEntrada = require("prompt-sync")();

const consumoDeEnergiaTexto = capturarEntrada("Escribe el consumo de energía del sector (kWh): ");

const consumoDeEnergia = parseFloat(consumoDeEnergiaTexto) || 0;

if (consumoDeEnergia <= 100) {
    console.log("🟢 Consumo bajo: Suministro optimizado para luminarias.");
} else if (consumoDeEnergia <= 300) {
    console.log("🟡 Consumo Medio: Actividad estándar en sistemas de bombeo.");
} else {
    console.log("🔴 Consumo Alto: Alerta de sobrecarga en el cuadrante.");
}



const sueldoEmpleadoTexto = capturarEntrada("Escribe el sueldo del tasador: ");
const sueldoEmpleado = parseFloat(sueldoEmpleadoTexto) || 0;


if (sueldoEmpleado < 500) {
    console.log("💼 Escalafón: Sueldo básico.");
} else if (sueldoEmpleado <= 1000) {
    
    console.log("💼 Escalafón: Sueldo medio.");
} else {
    console.log("💼 Escalafón: Sueldo alto.");
}