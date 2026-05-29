console.log(Math.round(4.6));     
console.log(Math.floor(4.9));     
console.log(Math.ceil(4.1));      
console.log(Math.abs(-7));        
console.log(Math.max(3, 8, 1));   
console.log(Math.min(3, 8, 1));   
console.log(Math.sqrt(16));       
console.log(Math.pow(2, 10));     
console.log(Math.trunc(4.9));     
console.log(Math.random());       


function aleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(aleatorioEntre(1, 6));