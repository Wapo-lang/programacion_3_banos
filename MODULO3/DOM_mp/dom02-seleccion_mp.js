document.addEventListener("DOMContentLoaded", function() {

    const titulo = document.getElementById("titulo");
    console.log("🪦 Lápida principal (Título):", titulo);

    const notas = document.getElementsByClassName("nota");
    console.log("📜 Epitafios y notas del cementerio:", notas);

    const items = document.getElementsByTagName("li");
    console.log("👻 Tumbas y almas registradas (li):", items);

    const primerItem = document.querySelector(".item");
    console.log("🕯️ Primera alma errante encontrada:", primerItem);

    const todosLosItems = document.querySelectorAll(".item");
    console.log("⚰️ Todas las almas seleccionadas:", todosLosItems);

    Array.from(todosLosItems).forEach(element => {
        console.log("💀 Alma en pena individual:", element);
    });
    
});