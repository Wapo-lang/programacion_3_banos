const calcularDiezmo = (costo, porcentaje) => {
    return costo * porcentaje;
};


const calcularDiezmoCorto = (costo, porcentaje) => costo * porcentaje;


const duplicarFosas = cantidad => cantidad * 2;


const emitirAlertaVigilancia = () => "🚨 Guardia espectral activa.";


const configurarInscripcion = (nombre = "Ánima Anónima", ritual = "Sepelio Estándar") => {
    return `Inscripción: ${nombre} | Servicio: ${ritual}`;
};

const calcularPotenciaSacra = (base, exponente = 2) => base ** exponente;
const calcularAreaMausoleo = (base, altura) => (base * altura) / 2;



function calcularMasaAlmas(...pesos) {
    let totalMasa = 0;
    for (const peso_unitary of pesos) {
        totalMasa += peso_unitary;
    }
    return totalMasa;
}


function bitacoraAuditoria(categoria, ...registros) {
    for (const log of registros) {
        console.log(`[${categoria.toUpperCase()}] ${log}`);
    }
}



const nivelesEspectrales = [3, 1, 4, 1, 5, 9, 2, 6];


const nivelMaximo = Math.max(...nivelesEspectrales); 
const nivelMinimo = Math.min(...nivelesEspectrales);


const sectorNorte = ["Alma 1", "Alma 2"];
const sectorSur   = ["Alma 3", "Alma 4"];
const osarioComun = [...sectorNorte, ...sectorSur];


const criptasOriginales = ["A1", "A2", "A3"];
const copiaCriptas = [...criptasOriginales];
copiaCriptas.push("B1"); 



const fichaBaseDifunto = { nombre: "Carlos", edad: 19 };
const expedienteCompleto = { ...fichaBaseDifunto, ciudad: "Quito", estado: "Estable" };



function ritualVacio() {
    const esencia = "Volátil";
}


const esPar = n => n % 2 === 0;



function procesarRitualFinanciero(montoA, montoB, operacionCallback) {
    return operacionCallback(montoA, montoB);
}

const sumarAranceles = (x, y) => x + y;
const restarAranceles = (x, y) => x - y;



const auraGlobal = "Visible en toda la cripta";

function evaluarAislamiento() {
    const esenciaLocal = "Encapsulada en la función";
    
    console.log(auraGlobal); 
}


{
    const blindajeBloque = "Protegido";
    var variableProfana = "Filtrada/Evadida"; 
}



console.log("--- ⚖️ RESULTADOS DEL GRIMORIO DE FUNCIONES ---");
console.log(configurarInscripcion("Ana", "Mausoleo de Lujo"));
console.log(`Masa de Almas Calculada: ${calcularMasaAlmas(10, 20, 30, 40)}`);
console.log(`Picos Espectrales: Max=${nivelMaximo}, Min=${nivelMinimo}`);
console.log(`¿Ritual Vacío?: ${ritualVacio()}`);


const potenciaEspecial = procesarRitualFinanciero(2, 3, (base, exp) => base ** exp);
console.log(`Callback Inline Ejecutado: ${potenciaEspecial}`);

console.log(`Comportamiento de var evadido fuera del bloque: ${variableProfana}`);