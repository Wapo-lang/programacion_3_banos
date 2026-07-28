const codigoInscrito = "42";
const totalAlmas = Number(codigoInscrito);          


const sectorEntero = parseInt("3.14", 10);        
const profundidadDecimal = parseFloat("3.14");    

const epitafioCadena = String(42);                
const espectroActivo = Boolean(0);                

console.log("--- AUDITORÍA EXPLÍCITA ---");
console.log(totalAlmas, sectorEntero, profundidadDecimal, epitafioCadena, espectroActivo);



console.log("--- EFECTOS DE LA COERCIÓN ---");


console.log("5" + 3);    


console.log("5" - 3);    
console.log("5" * "2");  


console.log(true + 1);   
console.log(false + 1);  



console.log("--- ANÁLISIS DE FALLOS DE CONVERSIÓN ---");

console.log(Number("abc"));       
console.log(Number(""));          
console.log(Number(null));        
console.log(Number(undefined));   


console.log(isNaN(Number("abc"))); 
console.log(isNaN(42));