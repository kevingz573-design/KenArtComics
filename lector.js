document.addEventListener("DOMContentLoaded", function() {
    const carpeta = "comics/capitulo1/"; // ruta al capítulo
    const totalPaginas = 2; // número de imágenes de ejemplo
    const lector = document.getElementById("lector");

    for(let i = 1; i <= totalPaginas; i++){
        const img = document.createElement("img");
        img.src = carpeta + i.toString().padStart(2,'0') + ".jpg";
        img.style.width = "100%";
        img.style.marginBottom = "20px";
        lector.appendChild(img);
    }
});