const temperatura = 28; // grados Celsius

if (temperatura >= 35) {
  console.log("🌡️ Calor extremo. Evitar actividad al aire libre.");
} else if (temperatura >= 25) {
  console.log("☀️ Temperatura cálida. Condiciones ideales para exteriores.");
} else if (temperatura >= 15) {
  console.log("🌤️ Temperatura agradable. Llevar una chaqueta ligera.");
} else if (temperatura >= 5) {
  console.log("🧥 Temperatura fría. Abrigarse bien.");
} else {
  console.log("❄️ Temperatura bajo cero. Riesgo de heladas.");
}
// ☀️ Temperatura cálida. Condiciones ideales para exteriores.


const prompt = require("prompt-sync")();

const consumoDeEnergia = prompt("Escribe el consumo de energía (kWh): ");


if (consumoDeEnergia <= 100) {
    console.log("Consumo bajo")
} else if (consumoDeEnergia <= 300) {
    console.log("Consumo Medio")
} else {
    console.log("Consumo Alto")
}

const sueldoEmpleado = prompt("Escribe el sueldo del empleado: ");

if (sueldoEmpleado < 500) {
    console.log("Sueldo basico")
} else if (sueldoEmpleado >= 500 && sueldoEmpleado <= 1000) {
    console.log("Sueldo medio")
} else {
    console.log("Sueldo alto")
}
