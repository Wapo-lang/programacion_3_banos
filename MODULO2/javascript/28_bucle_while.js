index = 0
while (index <= 5) {
    console.log(index);
    index ++;

}

index = 10
while (index >= 0) {
    console.log(index);
    index --;
}


// Ejemplo — acumulación de ventas hasta alcanzar meta
const META_VENTAS   = 1000;
const ventasDiarias = [120, 85, 200, 310, 95, 250]; // registros de ventas
let totalAcumulado  = 0;
let diasTranscurridos = 0;

while (totalAcumulado < META_VENTAS && diasTranscurridos < ventasDiarias.length) {
  const ventaDelDia = ventasDiarias[diasTranscurridos];
  totalAcumulado   += ventaDelDia;
  diasTranscurridos++;

  console.log(`Día ${diasTranscurridos}: +$${ventaDelDia} → Acumulado: $${totalAcumulado}`);

  if (totalAcumulado >= META_VENTAS) {
    console.log(`🎯 ¡Meta alcanzada en ${diasTranscurridos} día(s)!`);
  }
}

if (totalAcumulado < META_VENTAS) {
  const faltante = META_VENTAS - totalAcumulado;
  console.log(`Meta no alcanzada. Faltan $${faltante.toFixed(2)}`);
}
// Día 1: +$120 → Acumulado: $120
// Día 2: +$85  → Acumulado: $205
// Día 3: +$200 → Acumulado: $405
// Día 4: +$310 → Acumulado: $715
// Día 5: +$95  → Acumulado: $810
// Día 6: +$250 → Acumulado: $1060
// 🎯 ¡Meta alcanzada en 6 día(s)!

const multiplicador = 5;
let numero = 1;

while (numero <= 10) {
  const resultado = multiplicador * numero;
  console.log(`${multiplicador} x ${numero} = ${resultado}`);
  numero++;
}


