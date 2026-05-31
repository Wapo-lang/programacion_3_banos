class EntidadCamposanto {
    constructor(
        protected nombre: string,
        protected antigüedad: number
    ) {}

    alimentarEsencia(): void {
        console.log(`  ${this.nombre} está absorbiendo energía.`);
    }

    entrarEnLetargo(): void {
        console.log(`  ${this.nombre} ha entrado en letargo.`);
    }

    toString(): string {
        return `${this.nombre} (${this.antigüedad} años)`;
    }
}

class GuardianHuesos extends EntidadCamposanto {
    private linaje: string;

    constructor(nombre: string, antigüedad: number, linaje: string) {
        super(nombre, antigüedad);
        this.linaje = linaje;
    }

    manifestarPresencia(): void {
        console.log(`  ${this.nombre}: ¡RUGIDO DESDE LAS SOMBRAS!`);
    }

    toString(): string {
        return `${super.toString()} — ${this.linaje}`;
    }
}

class SombraAncestral extends EntidadCamposanto {
    private esHostil: boolean;

    constructor(nombre: string, antigüedad: number, esHostil: boolean) {
        super(nombre, antigüedad);
        this.esHostil = esHostil;
    }

    desvanecer(): void {
        console.log(`  ${this.nombre}: Shhh... se disuelve en la niebla.`);
    }

    toString(): string {
        return `${super.toString()} — ${this.esHostil ? "hostil" : "pacífica"}`;
    }
}

console.log("=== SISTEMA DE HERENCIA EN EL INFRAMUNDO ===\n");

const cerbero = new GuardianHuesos("Cerbero", 3, "Can del Caos");
const espectro = new SombraAncestral("Espectro Errante", 5, false);

cerbero.alimentarEsencia();
espectro.alimentarEsencia();
cerbero.entrarEnLetargo();

cerbero.manifestarPresencia();
espectro.desvanecer();

console.log(`\nGuardián: ${cerbero.toString()}`);
console.log(`Sombra:   ${espectro.toString()}`);

console.log(`\n¿Cerbero es Guardián?  ${cerbero instanceof GuardianHuesos}`);
console.log(`¿Cerbero es Entidad?    ${cerbero instanceof EntidadCamposanto}`);
console.log(`¿Cerbero es Sombra?     ${cerbero instanceof SombraAncestral}`);