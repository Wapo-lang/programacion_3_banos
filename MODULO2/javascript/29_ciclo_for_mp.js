console.log("--- 📊 RITUAL 1: EL BUCLE FOR TRADICIONAL ---");

for (let i = 0; i < 5; i++) {
    console.log(`Índice secuencial: ${i}`);
}  


console.log("\n--- 🍎 RITUAL 2: RECORRIDO DE VECTORES (Lectura de Listas) ---");
const ofrendas = ["manzana", "banana", "cereza"];


for (let i = 0; i < ofrendas.length; i++) {
    console.log(`Ofrenda ${i + 1}: ${ofrendas[i]}`);
}


console.log("\n--- 🪦 RITUAL 3: REPORTE DE INVENTARIO DE LA CRIPTA (Formateo Profesional) ---");
const inventarioTumbas = [
    { codigo: "A01", nombre: "Teclado",  stock: 2  },
    { codigo: "A02", nombre: "Monitor",  stock: 15 },
    { codigo: "A03", nombre: "Mouse",    stock: 0  },
    { codigo: "A04", nombre: "Audífonos",stock: 7  },
    { codigo: "A05", nombre: "Webcam",   stock: 1  },
];

const STOCK_CRITICO = 3;


console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Elemento".padEnd(12)} Stock   Estado`);
console.log("─".repeat(48)); 

for (let i = 0; i < inventarioTumbas.length; i++) {
    const item = inventarioTumbas[i];
    
    
    const numeroFila = String(i + 1).padStart(2, "0");

    
    let semaforoEstado;
    if (item.stock === 0) {
        semaforoEstado = "🔴 AGOTADO";
    } else if (item.stock <= STOCK_CRITICO) {
        semaforoEstado = "🟡 CRÍTICO";
    } else {
        semaforoEstado = "🟢 Normal";
    }

    
    console.log(
        `${numeroFila}.  ${item.codigo.padEnd(6)} ${item.nombre.padEnd(12)} ` +
        `${String(item.stock).padStart(3)}u   ${semaforoEstado}`
    );
}