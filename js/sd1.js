document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contenedorformulario");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const botonEnviar = form.querySelector("button[type='submit']");
    if (botonEnviar) {
        botonEnviar.disabled = true;
        botonEnviar.innerText = "Enviando...";
    }

    if (form.nombre.value.trim() === "") {
      alert("Tienes que escribir tu NOMBRE");
      form.nombre.focus();
      if (botonEnviar) { botonEnviar.disabled = false; botonEnviar.innerText = "SEND MESSAGE"; }
      return;
    }
    if (form.apellido.value.trim() === "") {
      alert("Tienes que escribir tu APELLIDO");
      form.apellido.focus();
      if (botonEnviar) { botonEnviar.disabled = false; botonEnviar.innerText = "SEND MESSAGE"; }
      return;
    }
    if (form.email.value.trim() === "") {
      alert("Tienes que escribir tu CORREO ELECTRONICO");
      form.email.focus();
      if (botonEnviar) { botonEnviar.disabled = false; botonEnviar.innerText = "SEND MESSAGE"; }
      return;
    }

    if (form.telefono.value.trim() === "") {
      alert("Tienes que escribir tu TELEFONO");
      form.telefono.focus();
      if (botonEnviar) { botonEnviar.disabled = false; botonEnviar.innerText = "SEND MESSAGE"; }
      return;
    }
    if (form.mensaje.value.trim() === "") {
      alert("Tienes que escribir tu MENSAJE");
      form.mensaje.focus();
      if (botonEnviar) { botonEnviar.disabled = false; botonEnviar.innerText = "SEND MESSAGE"; }
      return;
    }

  });
});
