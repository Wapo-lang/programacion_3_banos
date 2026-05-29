const capturarEntrada = require("prompt-sync")();


const sumar       = (a, b) => a + b;
const restar      = (a, b) => a - b;
const multiplicar = (a, b) => a * b;


const dividir     = (a, b) => {
    if (b === 0) return "❌ Error: Intento de división por vacío (cero)";
    return a / b;
};


function calcular(a, b, signoOperacion) {
    
    const registroOperaciones = { 
        "+": sumar, 
        "-": restar, 
        "*": multiplicar, 
        "/": dividir 
    };

    
    const ejecutarRitual = registroOperaciones[signoOperacion];

    
    if (!ejecutarRitual) {
        return `⚠️ Anomalía: Operación "${signoOperacion}" no reconocida en los registros.`;
    }

    
    return ejecutarRitual(a, b);
}


function leerNumeroValido(mensajePrompt) {
    while (true) {
        const entradaTexto = capturarEntrada(mensajePrompt);
        const numeroCasteado = parseFloat(entradaTexto);

        
        
        if (!Number.isNaN(numeroCasteado)) {
            return numeroCasteado;
        }

        console.warn("🚨 Fragmento corrupto detectado. La esencia debe ser un número real. Intenta de nuevo.");
    }
}


console.log("=========================================");
console.log("   BALANZA ARITMÉTICA ARQUITECTÓNICA     ");
console.log("=========================================");

const operandoA  = leerNumeroValido("🔮 Inyecta el primer componente numérico: ");
const operandoB  = leerNumeroValido("🔮 Inyecta el segundo componente numérico: ");

const simbolo    = capturarEntrada("📐 Elige la compuerta de transmutación (+, -, *, /): ");


const veredictoFinal = calcular(operandoA, operandoB, simbolo);

console.log(`
=========================================
 INFORME DE LA TRANSMUTACIÓN
=========================================
  Ecuación procesada: ${operandoA} ${simbolo} ${operandoB}
  Resultado final   : ${veredictoFinal}
=========================================
`);