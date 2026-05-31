type HabitanteCripta = {
    nombre: string;
    edad:   number;
    email:  string;
};

function registrarHabitante(habitante: HabitanteCripta): void {
    console.log(`${habitante.nombre} (${habitante.edad} años) — ${habitante.email}`);
}

function verificarExpediente(habitante: HabitanteCripta): boolean {
    return habitante.nombre.length > 0 && habitante.email.includes("@");
}

const espectroFiel: HabitanteCripta = {
    nombre: "Ana García",
    edad:   28,
    email:  "ana@email.com"
};

registrarHabitante(espectroFiel);
console.log(`¿Válido? ${verificarExpediente(espectroFiel)}`);