class CuentaMausoleo {
    private saldoEsencias: number;
    private registroRituales: string[] = [];

    constructor(titular: string, esenciasIniciales: number) {
        this.saldoEsencias = esenciasIniciales;
        this.registroRituales.push(`Bóveda sellada con ${esenciasIniciales} unidades.`);
        console.log(`Cuenta de ${titular} inicializada en el osario.`);
    }

    depositar(cantidad: number): void {
        this.saldoEsencias += cantidad;
        this.registrar(`Ofrenda: +${cantidad} esencias.`);
        console.log(`   Añadidas ${cantidad} unidades. Fondo actual: ${this.saldoEsencias}`);
    }

    retirar(cantidad: number): void {
        if (cantidad > this.saldoEsencias) {
            console.log("   Anomalía: Fondos de esencia insuficientes para la exhumación.");
            return;
        }
        this.saldoEsencias -= cantidad;
        this.registrar(`Exhumación: -${cantidad} esencias.`);
        console.log(`   Retiradas ${cantidad} unidades. Fondo actual: ${this.saldoEsencias}`);
    }

    consultarSaldo(): number {
        return this.saldoEsencias;
    }

    verHistorial(): void {
        console.log("\n   Registro de Movimientos Espectrales:");
        this.registroRituales.forEach(registro => console.log(`    ${registro}`));
    }

    private registrar(operacion: string): void {
        this.registroRituales.push(operacion);
    }
}

console.log("=== CONTROL DE BÓVEDAS DEL CAMPOSANTO ===\n");
const cuentaCripta = new CuentaMausoleo("Ana García", 1000);

cuentaCripta.depositar(500);
cuentaCripta.retirar(200);
cuentaCripta.retirar(2000);

console.log(`\nEsencias actuales en bóveda: ${cuentaCripta.consultarSaldo()}`);
cuentaCripta.verHistorial();