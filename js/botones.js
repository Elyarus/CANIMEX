// Función para eliminar una película
const eliminarAnime = async (idAnime) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch(`http://localhost:8080/api/animes/${idAnime}`, options);
    if (response.ok) {
        location.reload(); // Recarga la página para reflejar los cambios
    } else {
        console.error('Error eliminando el anime');
    }
};

// Función para modificar una película (esto puede abrir un formulario modal, por ejemplo)
const modificarAnime = (anime) => {
    // Aquí puedes implementar la lógica para modificar una película.
    // Por ejemplo, abrir un formulario modal con los datos de la película para editar.
    console.log('Modificar anime:', anime);
};