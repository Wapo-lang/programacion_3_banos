console.log("--- ⚖️ VERIFICACIÓN EXPLÍCITA DE ESENCIAS (Boolean) ---");

console.log(Boolean(0));          
console.log(Boolean(""));         


console.log(Boolean("false"));    
console.log(Boolean("0"));        
console.log(Boolean([]));         
console.log(Boolean({}));         
console.log(Boolean(-1));         


console.log("\n--- ⚡ OPERADOR AND (&&) COMO FILTRO DE CORTOCIRCUITO ---");


console.log(1 && 2);              
console.log(0 && 2);              
console.log("" && "Epitafio");    
console.log("Cripta" && "Altar"); 


console.log("\n--- 🔮 CASOS PRÁCTICOS DE ALTA INGENIERÍA ---");


const vigilante = { nombre: "Diego", esInquisidor: true };


vigilante.esInquisidor && console.log("📜 Acceso concedido a los Archivos Prohibidos.");



const difuntoSinDireccion = { 
    nombre: "Espectro Errante" 
    
};


const sectorCripta = difuntoSinDireccion.registroDefuncion && difuntoSinDireccion.registroDefuncion.sector;

console.log(`Ubicación del espectro: ${sectorCripta}`);