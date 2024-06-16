"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("formAdm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = true;
    var messages = []; // Validar Título

    var title = document.getElementById("titulo").value;
    var titleRegex = /^[A-Za-z0-9\s!¡?.\-:,]*$/;

    if (!titleRegex.test(title)) {
      isValid = false;
      messages.push("El título solo puede contener letras, números, espacios, signos de admiración/exclamación, puntos, guiones, dos puntos y comas.");
    } // Validar Género


    var genre = document.getElementById("genero").value;
    var genreRegex = /^[A-Za-z\s\-\/]*$/;

    if (!genreRegex.test(genre)) {
      isValid = false;
      messages.push("El género solo puede contener letras, espacios, guiones o barras.");
    } // Validar Editorial


    var editorial = document.getElementById("editorial").value;
    var editorialRegex = /^[\t-\r ,-\.0-9A-Z_a-z\xA0\u1680\u2000-\u200A\u2019\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;

    if (!editorialRegex.test(editorial)) {
      isValid = false;
      messages.push("La editorial solo puede contener letras, espacios y caracteres especiales.");
    } // Validar Sinopsis


    var synopsis = document.getElementById("sinopsis").value;
    var synopsisRegex = /^[A-Za-z0-9\s!¡?.\-:,áéíóúÁÉÍÓÚñÑ']*$/; // Ajuste para permitir caracteres especiales en español

    if (!synopsisRegex.test(synopsis)) {
      isValid = false;
      messages.push("La sinopsis solo puede contener letras, números, espacios, signos de admiración/exclamación, puntos, guiones, dos puntos, comas y caracteres especiales en español.");
    } // Validar Imagen


    var image = document.getElementById("imagen").files;

    if (image.length === 0) {
      isValid = false;
      messages.push("Debe subir al menos una imagen.");
    } else {
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

      if (!allowedExtensions.exec(image[0].name)) {
        isValid = false;
        messages.push("Solo se permiten archivos de imagen con extensiones .jpeg/.jpg/.png/.gif.");
      }
    }

    if (isValid) {
      alert("¡Anime ingresado correctamente!");
      form.reset(); // Limpiar los campos del formulario
    } else {
      alert(messages.join("\n"));
    }
  });
});
//# sourceMappingURL=valida_adm.dev.js.map
