document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formAdm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;
        let messages = [];

        // Validar Título
        const title = document.getElementById("titulo").value;
        const titleRegex = /^[A-Za-z0-9\s!¡?.\-:,]*$/;
        if (!titleRegex.test(title)) {
            isValid = false;
            messages.push("El título solo puede contener letras, números, espacios, signos de admiración/exclamación, puntos, guiones, dos puntos y comas.");
        }

        // Validar Género
        const genre = document.getElementById("genero").value;
        const genreRegex = /^[A-Za-z\s\-\/]*$/;
        if (!genreRegex.test(genre)) {
            isValid = false;
            messages.push("El género solo puede contener letras, espacios, guiones o barras.");
        }

        // Validar Editorial
        const editorial = document.getElementById("editorial").value;
        const editorialRegex = /^[\w\s\-’.,]*$/u;
        if (!editorialRegex.test(editorial)) {
            isValid = false;
            messages.push("La editorial solo puede contener letras, espacios y caracteres especiales.");
        }

        // Validar Sinopsis
        const synopsis = document.getElementById("sinopsis").value;
        const synopsisRegex = /^[A-Za-z0-9\s!¡?.\-:,áéíóúÁÉÍÓÚñÑ']*$/; // Ajuste para permitir caracteres especiales en español
        if (!synopsisRegex.test(synopsis)) {
            isValid = false;
            messages.push("La sinopsis solo puede contener letras, números, espacios, signos de admiración/exclamación, puntos, guiones, dos puntos, comas y caracteres especiales en español.");
        }

        // Validar Imagen
        const image = document.getElementById("imagen").files;
        if (image.length === 0) {
            isValid = false;
            messages.push("Debe subir al menos una imagen.");
        } else {
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
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
