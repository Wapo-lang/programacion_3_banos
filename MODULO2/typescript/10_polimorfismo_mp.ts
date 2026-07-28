abstract class EstructuraFuneraria {
    constructor(protected material: string) {}

    abstract calcularAreaFosa(): number;
    abstract calcularPerimetroEstructura(): number;

    describirEstructura(): string {
        return `${this.constructor.name} de ${this.material}: ` +
               `área=${this.calcularAreaFosa().toFixed(2)}, perímetro=${this.calcularPerimetroEstructura().toFixed(2)}`;
    }
}

class MausoleoCirculo extends EstructuraFuneraria {
    constructor(material: string, private radio: number) {
        super(material);
    }

    calcularAreaFosa(): number { 
        return Math.PI * this.radio ** 2; 
    }
    
    calcularPerimetroEstructura(): number { 
        return 2 * Math.PI * this.radio; 
    }
}

class CriptaRectangulo extends EstructuraFuneraria {
    constructor(material: string, private ancho: number, private alto: number) {
        super(material);
    }

    calcularAreaFosa(): number { 
        return this.ancho * this.alto; 
    }
    
    calcularPerimetroEstructura(): number { 
        return 2 * (this.ancho + this.alto); 
    }
}

class TumbaTriangulo extends EstructuraFuneraria {
    constructor(material: string, private a: number, private b: number, private c: number) {
        super(material);
    }

    calcularPerimetroEstructura(): number { 
        return this.a + this.b + this.c; 
    }
    
    calcularAreaFosa(): number {
        const s = this.calcularPerimetroEstructura() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

console.log("=== ARQUITECTURA DE RITUALES POLIMÓRFICOS ===\n");

const registrosCementerio: EstructuraFuneraria[] = [
    new MausoleoCirculo("Mármol Negro", 5),
    new CriptaRectangulo("Granito Ancestral", 4, 6),
    new TumbaTriangulo("Piedra Caliza", 3, 4, 5),
    new MausoleoCirculo("Obsidiana", 3),
];

for (const estructura of registrosCementerio) {
    console.log(`  ${estructura.describirEstructura()}`);
}

const areaOcupadaTotal = registrosCementerio.reduce((acumulador, fosa) => acumulador + fosa.calcularAreaFosa(), 0);
console.log(`\n  Área total del campo santo ocupada: ${areaOcupadaTotal.toFixed(2)}`);