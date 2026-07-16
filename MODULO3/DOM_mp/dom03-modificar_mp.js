document.addEventListener("DOMContentLoaded", function() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "🕯️ El epitafio ha sido modificado en el DOM";
    console.log("📜 Mensaje de la cripta: ", mensaje);

    const link = document.getElementById("link");
    link.href = "https://www.google.com";
    link.textContent = "👻 Portal abierto al más allá";
    link.classList.add("boton");
    console.log("⚰️ Link encantado: ", link);
});