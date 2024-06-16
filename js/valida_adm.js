document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formAdm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        // Función para validar campo no vacío y no solo espacios
        function noVacio(str) {
            return str.trim().length > 0;
        }

        // Función para mostrar el error
        function showError(element, message) {
            alert(message);
            element.style.borderColor = "red";
            isValid = false;
        }

        // Función para limpiar el error
        function clearError(element) {
            element.style.borderColor = "";
        }

        // Validar Título
        const titulo = document.getElementById("titulo");
        const titleRegex = /^[A-Za-z0-9\s!¡?.\-:,]*$/;
        clearError(titulo);
        if (!noVacio(titulo.value) || !titleRegex.test(titulo.value)) {
            showError(titulo, "Ingrese un título válido.");
        }

        // Validar Género
        const genero = document.getElementById("genero");
        const genreRegex = /^[A-Za-z\s\-\/]*$/;
        clearError(genero);
        if (!noVacio(genero.value) || !genreRegex.test(genero.value)) {
            showError(genero, "Ingrese un género válido.");
        }

        // Validar Editorial
        const editorial = document.getElementById("editorial");
        const editorialRegex = /^[\w\s\-’.,]*$/u;
        clearError(editorial);
        if (!noVacio(editorial.value) || !editorialRegex.test(editorial.value)) {
            showError(editorial, "Ingrese una editorial válida.");
        }

        // Validar Sinopsis
        const sinopsis = document.getElementById("sinopsis");
        const synopsisRegex = /^[A-Za-z0-9\s!¡?.\-:,áéíóúÁÉÍÓÚñÑ']*$/; // Ajuste para permitir caracteres especiales en español
        clearError(sinopsis);
        if (!noVacio(sinopsis.value) || !synopsisRegex.test(sinopsis.value)) {
            showError(sinopsis, "Ingrese una sinopsis válida.");
        }

        // Validar Imagen
        const imagen = document.getElementById("imagen");
        clearError(imagen);
        if (imagen.files.length === 0) {
            showError(imagen, "Debe subir al menos una imagen.");
        } else {
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (!allowedExtensions.exec(imagen.files[0].name)) {
                showError(imagen, "Solo se permiten archivos de imagen con extensiones .jpeg/.jpg/.png/.gif.");
            }
        }

        if (isValid) {
            alert("¡Anime ingresado correctamente!");
            form.reset(); // Limpiar los campos del formulario
        }
    });
});
