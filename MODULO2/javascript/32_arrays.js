// Crear un array — corchetes []
const frutas   = ["manzana", "banana", "cereza"];
const numeros  = [1, 2, 3, 4, 5];
const mixto    = [1, "dos", true, null];          // válido pero poco recomendable
const vacio    = [];

// Acceso por índice — empieza en 0
console.log(frutas[0]);   // "manzana"
console.log(frutas[2]);   // "cereza"
console.log(frutas[9]);   // undefined — no lanza error

// Índice negativo — NO funciona en JS (devuelve undefined)
console.log(frutas[-1]);  // undefined ← en Python sí funciona, en JS no

// at() — acceso con índice negativo (ES2022)
console.log(frutas.at(-1));   // "cereza"  ← el último elemento
console.log(frutas.at(-2));   // "banana"

// Longitud
console.log(frutas.length);   // 3

// Modificar un elemento
frutas[1] = "mango";
console.log(frutas);   // ["manzana", "mango", "cereza"]