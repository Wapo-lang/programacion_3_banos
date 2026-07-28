const criptas = ["Mausoleo A", "Nicho B", "Osario C"];


console.log(`Primer elemento: ${criptas[0]}`); 


console.log(`Último elemento con .at(-1): ${criptas.at(-1)}`); 


criptas[1] = "Crematorio B";



const loteIdentificadores = [1, 2, 3];

loteIdentificadores.push(4, 5);    
const elementoEliminadoFinal = loteIdentificadores.pop(); 

loteIdentificadores.unshift(0); 
const elementoEliminadoInicio = loteIdentificadores.shift(); 


const registrosMeses = ["ene", "feb", "abr", "may"];
registrosMeses.splice(2, 0, "mar"); 


const escalaValidacion = [10, 20, 30, 20, 40];
console.log(`Primera posición del 20: ${escalaValidacion.indexOf(20)}`); 
console.log(`Última posición del 20: ${escalaValidacion.lastIndexOf(20)}`); 
console.log(`¿Existe el valor 30?: ${escalaValidacion.includes(30)}`); 


const subSeccion = escalaValidacion.slice(1, 4); 


const loteDesordenado = [10, 1, 21, 2];


loteDesordenado.sort((a, b) => a - b); 



const espectros = [
    { nombre: "Ana",   edad: 28 },
    { nombre: "Luis",  edad: 31 },
    { nombre: "Marta", edad: 25 }
];


const proyeccionNombres = espectros.map(e => e.nombre); 



console.log("\n--- 🌡️ REGISTRO TÉRMICO DE LAS CATACUMBAS ---");
const celsius = [0, 15, -5, 22, 37, 100, -10, 28];


const fahrenheit = celsius.map(c => (c * 9/5) + 32);


const celsiusFiltrados = celsius.filter(c => c >= 0 && c <= 30);


const fahrenheitFiltradosEncadenados = celsius
    .filter(c => c >= 0 && c <= 30)
    .map(c => (c * 9/5) + 32);

console.log(`Fahrenheit Totales : [${fahrenheit.join(", ")}]`);
console.log(`Rango Seguro (ºC)  : [${celsiusFiltrados.join(", ")}]`);
console.log(`Rango Seguro (ºF)  : [${fahrenheitFiltradosEncadenados.join(", ")}]`);