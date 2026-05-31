class MonjeCamposanto {
    private _nombre:  string;
    private _salario: number;
    private _email:   string;

    constructor(nombre: string, salario: number, email: string) {
        this._nombre  = nombre;
        this._salario = salario;
        this._email   = email;
    }

    get nombre(): string { return this._nombre; }
    get salario(): number { return this._salario; }
    get email(): string { return this._email; }

    set nombre(valor: string) {
        if (valor.trim().length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres.");
        }
        this._nombre = valor.trim();
    }

    set salario(valor: number) {
        if (valor < 0) {
            throw new Error("El salario no puede ser negativo.");
        }
        this._salario = valor;
    }

    set email(valor: string) {
        if (!valor.includes("@")) {
            throw new Error("El email no es válido.");
        }
        this._email = valor.toLowerCase();
    }

    toString(): string {
        return `${this._nombre} — ${this._salario}€ — ${this._email}`;
    }
}

console.log("=== ENCAPSULAMIENTO ===\n");
const monje = new MonjeCamposanto("Ana García", 2500, "Ana@Empresa.COM");
console.log(monje.toString());

monje.salario = 3000;
monje.email   = "ana@empresa.com";
console.log(`Nuevo salario: ${monje.salario}€`);

try {
    monje.salario = -500;
} catch (e) {
    console.log(`Error al cambiar salario: ${(e as Error).message}`);
}

try {
    monje.email = "emailsinrobadillo";
} catch (e) {
    console.log(`Error al cambiar email: ${(e as Error).message}`);
}