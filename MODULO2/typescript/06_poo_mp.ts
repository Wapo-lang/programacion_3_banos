class HabitanteCripta {
    nombre: string;
    edad:   number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad   = edad;
    }

    saludar(): string {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }

    cumplirAños(): void {
        this.edad++;
        console.log(`¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad}.`);
    }
}

const ana  = new HabitanteCripta("Ana García", 28);
const luis = new HabitanteCripta("Luis Pérez", 31);

console.log(ana.saludar());
console.log(luis.saludar());
ana.cumplirAños();
console.log(ana.saludar());