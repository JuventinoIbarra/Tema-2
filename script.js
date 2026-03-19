document.getElementById("btn-action").addEventListener("click", function()
{
    const mensaje = document.getElementById('mensaje');

    mensaje.innerHTML = "¡Código esta funcionando!";
    mensaje.style.color = "green";

    console.log("Evento de click al botón");
});

document.getElementById("btn-cancelar").addEventListener("click", function(){
    const mensaje = document.getElementById('mensaje');

    mensaje.innerHTML = "¡Acción Cancelada!";
    mensaje.style.color = "red";

    console.log("Evento de click al boton de cancelar");
});

document.getElementById("btn-produccion").addEventListener("click", function(){
    const mensaje = document.getElementById('mensaje');

    mensaje.innerHTML = "¡Mandando a Producción!"
    mensaje.style.color = "yellow";

    console.log("Evento de click al boton de producción")
})