const difunto = {
    nombre: "Ana",
    edad: 28,
    activo: true
};


console.log(`Nombre registrado: ${difunto.nombre}`); 


const metadatoClave = "edad";
console.log(`Edad leída dinámicamente: ${difunto[metadatoClave]}`); 


console.log(`Teléfono de contacto: ${difunto.telefono}`); 


difunto.ciudad = "Quito"; 


delete difunto.activo;



const ritualCalculadora = {
    
    sumar: function(a, b) { return a + b; },

    
    restar(a, b) { return a - b; },

    
    multiplicar: (a, b) => a * b
};



const espectroMausoleo = {
    nombre: "Ana",
    edad: 28,

    
    describir() {
        return `Espectro: ${this.nombre} | Antigüedad: ${this.edad} años.`;
    },

    cumplirCiclo() {
        this.edad++; 
        return `Evolución: ${this.nombre} alcanza los ${this.edad} años espectrales.`;
    },

    
    describirInvalido: () => {
        
        return `Espectro: ${this.nombre}`; 
    }
};



const tagSector = "Norte";
const capacidad = 150;


const criptaConfigurada = { tagSector, capacidad };


console.log("--- ⚖️ INFORME DE ESTRUCTURAS DE DATOS ---");
console.log(espectroMausoleo.describir());
console.log(espectroMausoleo.cumplirCiclo());
console.log(`Intento con Arrow (Fallo de Contexto): ${espectroMausoleo.describirInvalido()}`);
console.log("Objeto Shorthand inmutable:", criptaConfigurada);