function transmutarOfrendas(cantidad: number, factor: number): number {
    return cantidad * factor;
}

function invocarEpitafio(nombre: string): string {
    return `Hola, ${nombre}!`;
}

function verificarFosaPar(identificador: number): boolean {
    return identificador % 2 === 0;
}

function bitacoraCementerio(mensaje: string): void {
    console.log(`[INFO] ${mensaje}`);
}

console.log(transmutarOfrendas(4, 7));
console.log(invocarEpitafio("Ana"));
console.log(verificarFosaPar(10));
console.log(verificarFosaPar(7));
bitacoraCementerio("Todo listo");


function clasificarRangoTumba(notaNivel: number): string {
    if (notaNivel < 0 || notaNivel > 10) {
        return "Nota fuera de rango";
    }
    if (notaNivel >= 9) {
        return "Sobresaliente";
    }
    if (notaNivel >= 7) {
        return "Notable";
    }
    if (notaNivel >= 5) {
        return "Aprobado";
    }
    return "Suspenso";
}

const nivelesTumbas: number[] = [10, 8.5, 6, 4.2, 11, -1];
for (const nivel of nivelesTumbas) {
    console.log(`Nota ${nivel}: ${clasificarRangoTumba(nivel)}`);
}


function validarClaveCripta(password: string): string {
    if (password.length < 8) {
        return "❌ Muy corta (mínimo 8 caracteres)";
    }
    if (!/[A-Z]/.test(password)) {
        return "❌ Debe tener al menos una mayúscula";
    }
    if (!/[0-9]/.test(password)) {
        return "❌ Debe tener al menos un número";
    }
    return "✅ Contraseña válida";
}

const clavesAcceso: string[] = ["abc", "abcdefgh", "Abcdefgh", "Abcdefg1"];
for (const clave of clavesAcceso) {
    console.log(`"${clave}" → ${validarClaveCripta(clave)}`);
}