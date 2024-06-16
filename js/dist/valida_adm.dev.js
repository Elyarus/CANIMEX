"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("formAdm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = true; // Validar Título

    var title = document.getElementById("titulo").value;
    var titleRegex = /^[A-Za-z0-9\s!¡?.\-:,]*$/;

    if (!titleRegex.test(title)) {
      isValid = false;
      alert("El título solo puede contener letras, números, espacios, signos de admiración/exclamación, puntos, guiones, dos puntos y comas.");
    } // Validar Género


    var genre = document.getElementById("genero").value;
    var genreRegex = /^[A-Za-z\s\-\/]*$/;

    if (!genreRegex.test(genre)) {
      isValid = false;
      alert("El género solo puede contener letras, espacios, guiones o barras.");
    } // Validar Editorial


    var editorial = document.getElementById("editorial").value;
    var editorialRegex = /^[\t-\r ,-\.0-9A-Z_a-z\xA0\u1680\u2000-\u200A\u2019\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;

    if (!editorialRegex.test(editorial)) {
      isValid = false;
      alert("La editorial solo puede contener letras, espacios y caracteres especiales.");
    } // Validar Sinopsis


    var synopsis = document.getElementById("sinopsis").value;
    var synopsisRegex = /^[A-Za-z0-9\s!¡?.\-:,]*$/;

    if (!synopsisRegex.test(synopsis)) {
      isValid = false;
      alert("La sinopsis solo puede contener letras, números, espacios, signos de admiración/exclamación, puntos, guiones, dos puntos y comas.");
    } // Validar Imagen


    var image = document.getElementById("imagen").files;

    if (image.length === 0) {
      isValid = false;
      alert("Debe subir al menos una imagen.");
    } else {
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

      if (!allowedExtensions.exec(image[0].name)) {
        isValid = false;
        alert("Solo se permiten archivos de imagen con extensiones .jpeg/.jpg/.png/.gif.");
      }
    }

    if (isValid) {
      alert("!Anime ingresado correctamente!");
      form.reset(); // Limpiar los campos del formulario (luego hay que cambiarlo para que se envie y traiga los datos de la API)
    }
  });
});
//# sourceMappingURL=valida_adm.dev.js.map
