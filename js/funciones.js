// MENU RESPONSIVE (ABRIR/CERRAR)
$("#icono-menu").click(function() {
    $("#menu-principal").slideToggle();
});

// SLIDER DE FOTOS
$(function() {
    $(".rslides").responsiveSlides({
        auto: true,
        speed: 500,
        timeout: 4000,
        nav: true
    });

    $(".rslides_nav.prev").html('<i class="fa-solid fa-angle-left"></i>');
    $(".rslides_nav.next").html('<i class="fa-solid fa-angle-right"></i>');
});

// MODAL
$(".btn-abrir-modal").click(function(event) {
    event.preventDefault(); 
    $("#ventana-modal").addClass("mostrar");
});

$("#btn-cerrar-modal").click(function() {
    $("#ventana-modal").removeClass("mostrar");
});

// VALIDACION FORMULARIO JS
document.addEventListener("DOMContentLoaded", function () {
    // Buscar por ID en el HTML
    const form = document.getElementById("formulario-contacto");

    // Condicional Si el formulario existe en la página
    if (form) {
        form.addEventListener("submit", async function (e) {
            // Evita que la página se recargue al enviar
            e.preventDefault();

            // Cambia el texto a "Enviando..."
            const botonEnviar = form.querySelector("button[type='submit']");
            if (botonEnviar) {
                botonEnviar.disabled = true;
                botonEnviar.innerText = "Enviando...";
            }

            // VALIDACIÓN DE NOMBRE
            if (form.nombre.value.trim() === "") {
                alert("Tienes que escribir tu NOMBRE");
                form.nombre.focus(); // Pone el cursor en la caja vacía
                if (botonEnviar) { 
                    botonEnviar.disabled = false; 
                    botonEnviar.innerText = "ENVIAR"; 
                }
                return; // Detiene ejecución 
            } 

            // VALIDACIÓN DE EMAIL
            if (form.email.value.trim() === "") {
                alert("Tienes que escribir tu CORREO ELECTRÓNICO");
                form.email.focus();
                if (botonEnviar) { 
                    botonEnviar.disabled = false; 
                    botonEnviar.innerText = "ENVIAR"; 
                }
                return;
            }

            // VALIDACIÓN DE MENSAJE
            if (form.mensaje.value.trim() === "") {
                alert("Tienes que escribir tu MENSAJE");
                form.mensaje.focus();
                if (botonEnviar) { 
                    botonEnviar.disabled = false; 
                    botonEnviar.innerText = "ENVIAR"; 
                }
                return;
            }

            // SI PASA TODAS LAS VALIDACIONES BIEN
            alert("¡Formulario enviado correctamente!");
            form.reset(); // Limpia campos 
            
            // Regresa el botón a la normalidad
            if (botonEnviar) { 
                botonEnviar.disabled = false; 
                botonEnviar.innerText = "ENVIAR"; 
            }
        }); // Cierre del form.addEventListener
    } // Cierre del if (form) 
}); // Cierre del document.addEventListener

// ACORDEÓN-----
// Acordeón 1
$("#gatillo-1").click(function () {
    $("#contenido-1").slideToggle(300);
    $("#flecha-1").toggleClass("rotar");
});

// Acordeón 2
$("#gatillo-2").click(function () {
    $("#contenido-2").slideToggle(300);
    $("#flecha-2").toggleClass("rotar");
});

// Acordeón 3
$("#gatillo-3").click(function () {
    $("#contenido-3").slideToggle(300);
    $("#flecha-3").toggleClass("rotar");
});

// Acordeón 4
$("#gatillo-4").click(function () {
    $("#contenido-4").slideToggle(300);
    $("#flecha-4").toggleClass("rotar");
});
// FANCYBOX
Fancybox.bind("[data-fancybox]", {
    
});