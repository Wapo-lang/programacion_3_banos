const exhumarRegistro = (codigoTumba) => {
    return new Promise((resolver, rechazar) => {
        const busquedaExitosa = true;

        if (busquedaExitosa) {
            resolver({
                codigo: codigoTumba,
                entidad: "Mausoleo Ancestral",
                estado: "Sellado"
            });
        } else {
            rechazar(`Error: El registro de la tumba ${codigoTumba} ha sido profanado.`);
        }
    });
};

console.log("🕯️ Apertura del portal: Iniciando auditoría del camposanto...");

exhumarRegistro("Cripta-A04")
    .then((registro) => {
        console.log("📜 Archivo recuperado del osario con éxito:");
        console.log(`  Identificador: ${registro.codigo}`);
        console.log(`  Estructura   : ${registro.entidad}`);
        console.log(`  Condición    : ${registro.estado}`);
    })
    .catch((error) => {
        console.error(`🚨 Alerta en las catacumbas: ${error}`);
    })
    .finally(() => {
        console.log("🔒 Clausura del portal: Operación de rastreo finalizada.");
    });

console.log("👁️ El vigilante continúa su ronda (El hilo principal no se detiene).");