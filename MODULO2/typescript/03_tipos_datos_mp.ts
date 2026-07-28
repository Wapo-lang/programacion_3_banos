const epitafioNombre: string = "Ana García";
const saludoInvocacion: string = `Hola, ${epitafioNombre}`;
const registroVacio: string = "";
const inscripcionAlterna: string = 'También con comillas simples';

console.log(epitafioNombre);
console.log(saludoInvocacion);
console.log(`La cadena vacía tiene longitud: ${registroVacio.length}`);

console.log(epitafioNombre.toUpperCase());
console.log(epitafioNombre.toLowerCase());
console.log(epitafioNombre.includes("García"));
console.log(epitafioNombre.split(" "));


const edadDifunto: number = 42;
const profundidadFosa: number = 3.14;
const balanceEsencias: number = -100;
const masaAlmasGranEscala: number = 1_000_000;
const tasaTransmutacion: number = 10 / 3;

console.log(edadDifunto);
console.log(profundidadFosa);
console.log(masaAlmasGranEscala);
console.log(tasaTransmutacion);
console.log(tasaTransmutacion.toFixed(2));

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(2 ** 10);


const accesoMausoleoPermitido: boolean = true;
const tieneLlaveCripta: boolean = false;

console.log(accesoMausoleoPermitido);
console.log(!accesoMausoleoPermitido);
console.log(accesoMausoleoPermitido && tieneLlaveCripta);
console.log(accesoMausoleoPermitido || tieneLlaveCripta);

const edadCronologica = 20;
const esAdultoEspectro: boolean = edadCronologica >= 18;
console.log(`¿Es adulto? ${esAdultoEspectro}`);


let entidadInciertaProfana: any = "hola";
entidadInciertaProfana = 42;
entidadInciertaProfana = true;
entidadInciertaProfana = [1, 2, 3];


function depurarEntradaDesconocida(esenciaMisteriosa: unknown): string {
    if (typeof esenciaMisteriosa === "string") {
        return esenciaMisteriosa.toUpperCase();
    }

    if (typeof esenciaMisteriosa === "number") {
        return esenciaMisteriosa.toFixed(2);
    }

    if (typeof esenciaMisteriosa === "boolean") {
        return esenciaMisteriosa ? "Sí" : "No";
    }

    return "Tipo no reconocido";
}

console.log(depurarEntradaDesconocida("hola"));
console.log(depurarEntradaDesconocida(3.14159));
console.log(depurarEntradaDesconocida(true));
console.log(depurarEntradaDesconocida(null));


function ejecutarSentenciaCrematorio(nombre: string): void {
    console.log(`Hola, ${nombre}!`);
}

ejecutarSentenciaCrematorio("Ana");

function duplicarEsencias(n: number): number {
    return n * 2;
}

const resultadoEsencias = duplicarEsencias(5);
console.log(resultadoEsencias);