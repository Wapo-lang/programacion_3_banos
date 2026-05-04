console.log("=== Ciclo for ===");
for (let i =0,; i<5; i++) {
    console.log(i);
}  

const frutas = ["manzana", "banana", "cereza"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

// Ejemplo — reporte de inventario con alertas por posición
const inventario = [
  { codigo: "A01", nombre: "Teclado",  stock: 2  },
  { codigo: "A02", nombre: "Monitor",  stock: 15 },
  { codigo: "A03", nombre: "Mouse",    stock: 0  },
  { codigo: "A04", nombre: "Audífonos",stock: 7  },
  { codigo: "A05", nombre: "Webcam",   stock: 1  },
];

const STOCK_CRITICO = 3;

console.log("=== Reporte de inventario ===");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Producto".padEnd(12)} Stock  Estado`);
console.log("─".repeat(48));

for (let i = 0; i < inventario.length; i++) {
  const item   = inventario[i];
  const numero = String(i + 1).padStart(2, "0");

  let estado;
  if (item.stock === 0) {
    estado = "🔴 AGOTADO";
  } else if (item.stock <= STOCK_CRITICO) {
    estado = "🟡 CRÍTICO";
  } else {
    estado = "🟢 Normal";
  }

  console.log(
    `${numero}.  ${item.codigo.padEnd(6)} ${item.nombre.padEnd(12)} ` +
    `${String(item.stock).padStart(3)}u   ${estado}`
  );
}
// ===  Reporte de inventario ===
// #    Código Producto     Stock  Estado
// ────────────────────────────────────────────────
// 01.  A01    Teclado        2u   🟡 CRÍTICO
// 02.  A02    Monitor       15u   🟢 Normal
// 03.  A03    Mouse          0u   🔴 AGOTADO
// 04.  A04    Audífonos      7u   🟢 Normal
// 05.  A05    Webcam         1u   🟡 CRÍTICO