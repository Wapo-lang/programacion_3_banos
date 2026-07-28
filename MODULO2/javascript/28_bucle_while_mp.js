console.log("--- 📈 RITUAL 1: CONTEO ASCENDENTE (Control de Escalada) ---");
let indiceAscendente = 0; 
while (indiceAscendente <= 5) { 
    console.log(`Paso actual: ${indiceAscendente}`);
    indiceAscendente++; 
}


console.log("\n--- 📉 RITUAL 2: CUENTA REGRESIVA (Reloj del Inframundo) ---");
let indiceDescendente = 10;
while (indiceDescendente >= 0) {
    console.log(`Segundos para el colapso: ${indiceDescendente}`);
    indiceDescendente--;
}


console.log("\n--- 🎯 RITUAL 3: ACUMULACIÓN DE ESENCIAS (Auditoría de Metas) ---");
const META_ALMAS = 1000;

const recoleccionDiaria = [120, 85, 200, 310, 95, 250]; 
let totalAcumuladoAlmas = 0;
let diasTranscurridos = 0;


while (totalAcumuladoAlmas < META_ALMAS && diasTranscurridos < recoleccionDiaria.length) {
    const almasDelDia = recoleccionDiaria[diasTranscurridos];
    totalAcumuladoAlmas += almasDelDia; 
    diasTranscurridos++;

    console.log(`Día ${diasTranscurridos}: +${almasDelDia} almas → Acumulado: ${totalAcumuladoAlmas}`);

    if (totalAcumuladoAlmas >= META_ALMAS) {
        console.log(`🎯 ¡Meta sagrada alcanzada en ${diasTranscurridos} día(s)!`);
    }
}


if (totalAcumuladoAlmas < META_ALMAS) {
    const faltante = META_ALMAS - totalAcumuladoAlmas;
    console.error(`❌ Alerta: Meta no alcanzada en el periodo. Faltan ${faltante} almas.`);
}


console.log("\n--- ✖️ RITUAL 4: PROYECCIÓN ARITMÉTICA (Tablas de Multiplicar) ---");
const factorMultiplicador = 5;
let iteradorTabla = 1;

while (iteradorTabla <= 10) {
    const productoCalculado = factorMultiplicador * iteradorTabla;
    console.log(`${factorMultiplicador} x ${iteradorTabla} = ${productoCalculado}`);
    iteradorTabla++;
}