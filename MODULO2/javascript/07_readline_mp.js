const texto   = "42";
const numero  = Number(texto);          
const entero  = parseInt("3.14", 10);  
const decimal = parseFloat("3.14");    
const cadena  = String(42);            
const bool    = Boolean(0);            

console.log(numero);   
console.log(entero);   
console.log(decimal);  
console.log(cadena);   
console.log(bool);     


console.log("5" + 3);    
console.log("5" - 3);    
console.log("5" * "2");  
console.log(true + 1);   
console.log(false + 1);  




console.log(Number("abc"));  
console.log(Number(""));     
console.log(Number(null));   
console.log(Number(undefined)); 


console.log(isNaN(Number("abc")));  
console.log(isNaN(42));