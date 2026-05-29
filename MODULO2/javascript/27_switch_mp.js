const tipoServicio = "cremacion_ritual";
let tasaImpuestoFunerario;
let certificadoDescripcion;


switch (tipoServicio) {
    
    
    case "entierro_ancestral":
    case "cremacion_ritual":
        tasaImpuestoFunerario   = 0;
        certificadoDescripcion = "Exento de aranceles (Decreto Sacro)";
        break; 

    case "mausoleo_marmol":
    case "cripta_familiar":
        tasaImpuestoFunerario   = 0.05;
        certificadoDescripcion = "Tasa reducida de conservación (5%)";
        break;

    case "embalsamamiento_premium":
    case "traslado_espectral":
        tasaImpuestoFunerario   = 0.15;
        certificadoDescripcion = "Impuesto estándar de lujo funerario (15%)";
        break;

    
    default:
        tasaImpuestoFunerario   = 0.15;
        certificadoDescripcion = "Impuesto estándar (Categoría desconocida en el registro)";
}


const costoBaseFosa = 80;
const impuestoAplicado = costoBaseFosa * tasaImpuestoFunerario;

console.log(`=========================================`);
console.log(`📋 REGISTRO DE TASACIÓN FÚNEBRE`);
console.log(`=========================================`);
console.log(`Servicio Evaluado : ${tipoServicio}`);
console.log(`Estado Arancelario: ${certificadoDescripcion}: $${impuestoAplicado.toFixed(2)}`);
console.log(`Tributo Total     : $${(costoBaseFosa + impuestoAplicado).toFixed(2)}`);
console.log(`=========================================`);