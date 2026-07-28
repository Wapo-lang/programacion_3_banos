const capturarEntrada = require("prompt-sync")();

console.log("=========================================");
console.log("   CONTADOR ARITMÉTICO DE MAUSOLEOS     ");
console.log("=========================================");


const espacioDisponibleTexto = capturarEntrada("Cantidad de nichos disponibles en el sector: ");
const ataudesPorIngresarTexto = capturarEntrada("Cantidad de ataúdes en camino al camposanto: ");


const nichosDisponibles = parseFloat(espacioDisponibleTexto) || 0;
const ataudesIngresantes = parseFloat(ataudesPorIngresarTexto) || 0;


const totalDespuesDeSepelio = nichosDisponibles + ataudesIngresantes;
const espacioRestanteEfectivo = nichosDisponibles - ataudesIngresantes;
const capacidadProyectada      = nichosDisponibles * ataudesIngresantes;


const proporcionOcupacion = ataudesIngresantes !== 0 
    ? nichosDisponibles / ataudesIngresantes 
    : "indefinido (división por vacío)";


console.log(`
=========================================
 INFORME LOGÍSTICO PARA: ${nichosDisponibles} vs ${ataudesIngresantes}
=========================================
  Suma (Carga total esperada)      : ${totalDespuesDeSepelio} unidades.
  Diferencia (Margen de holgura)   : ${espacioRestanteEfectivo} nichos libres.
  Producto (Factor de hacinamiento): ${capacidadProyectada}
  División (Proporción de espacio) : ${proporcionOcupacion}
=========================================
`);