"use strict";

function validarEmail(email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

function validarPassword(password) {
  var regex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
}

function validarRegistro() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (nombre.trim() === "" || apellido.trim() === "") {
    alert("Por favor, ingresa tu nombre y apellido.");
    return false;
  }

  if (!soloLetras(nombre) || !soloLetras(apellido)) {
    alert("El nombre y el apellido solo pueden contener letras.");
    resaltarError("nombre");
    resaltarError("apellido");
    return false;
  }

  if (!validarEmail(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    resaltarError("email");
    return false;
  }

  if (!validarPassword(password)) {
    alert("La contraseña debe tener al menos 8 caracteres, incluir números y letras, y al menos una letra mayúscula.");
    resaltarError("password");
    return false;
  }

  return true;
}

function soloLetras(texto) {
  var regex = /^[a-zA-Z\s]+$/;
  return regex.test(texto);
}

function resaltarError(idInput) {
  document.getElementById(idInput).style.borderColor = "red";
}
//# sourceMappingURL=validacion_registro.dev.js.map
