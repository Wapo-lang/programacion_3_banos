console.log("--- LÍMITES DEL INFRAMUNDO ---");
console.log(10 / 0);    
console.log(-10 / 0);   
console.log(0 / 0);     


console.log("--- COMPORTAMIENTO DE NaN ---");
console.log(NaN + 5);   


console.log(NaN === NaN); 



console.log("--- ERROR DE PUNTO FLOTANTE ---");
const sumaCentavos = 0.1 + 0.2; 
console.log(sumaCentavos);  


const esIgual = Math.abs(sumaCentavos - 0.3) < Number.EPSILON;
console.log(`¿La suma es equivalente a 0.3 de forma segura?: ${esIgual}`); 


console.log("--- REDONDEO CURATIVO ---");

const costoFormateado = (0.1 + 0.2).toFixed(2);

console.log(costoFormateado);        
console.log(typeof costoFormateado); 


const costoFinalNumero = Number(costoFormateado);
console.log(typeof costoFinalNumero);