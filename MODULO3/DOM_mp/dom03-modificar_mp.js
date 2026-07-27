document.addEventListener("DOMContentLoaded", function() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "El DOM ha sido modificado";
    console.log("Mensaje: ", mensaje);
    const link = document.getElementById("link");
    link.href = "https://www.google.com";
    link.textContent = "Ir a Google";
    link.classList.add("boton");
    console.log("Link: ", link);
});