document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formAdm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        // Validar Título
        const title = document.getElementById("titulo").value;
        const titleRegex = /^[A-Za-z0-9\s!¡?.\-:,]*$/;
        if (!titleRegex.test(title)) {
            isValid = false;
            alert("El título solo puede contener letras, números, espacios, signos de admiración/exclamación, puntos, guiones, dos puntos y comas.");
        }

        // Validar Género
        const genre = document.getElementById("genero").value;
        const genreRegex = /^[A-Za-z\s\-\/]*$/;
        if (!genreRegex.test(genre)) {
            isValid = false;
            alert("El género solo puede contener letras, espacios, guiones o barras.");
        }

        // Validar Editorial
        const editorial = document.getElementById("editorial").value;
        const editorialRegex = /^[\w\s\-\’\.\,]*$/u;
        if (!editorialRegex.test(editorial)) {
            isValid = false;
            alert("La editorial solo puede contener letras, espacios y caracteres especiales.");
        }

        // Validar Sinopsis
        const synopsis = document.getElementById("sinopsis").value;
        const synopsisRegex = /^[A-Za-z0-9\s!¡?.\-:,]*$/;
        if (!synopsisRegex.test(synopsis)) {
            isValid = false;
            alert("La sinopsis solo puede contener letras, números, espacios, signos de admiración/exclamación, puntos, guiones, dos puntos y comas.");
        }

        // Validar Imagen
        const image = document.getElementById("imagen").files;
        if (image.length === 0) {
            isValid = false;
            alert("Debe subir al menos una imagen.");
        } else {
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (!allowedExtensions.exec(image[0].name)) {
                isValid = false;
                alert("Solo se permiten archivos de imagen con extensiones .jpeg/.jpg/.png/.gif.");
            }
        }

        if (isValid) {
            alert("!Anime ingresado correctamente!")
            form.reset(); // Limpiar los campos del formulario (luego hay que cambiarlo para que se envie y traiga los datos de la API)
}
    });
});