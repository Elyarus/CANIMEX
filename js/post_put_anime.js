// cuando el dom se cargue
document.addEventListener('DOMContentLoaded', async () => {
    const formNuevoAnime = document.getElementById('formNuevoAnime');
    //agrego el evento submit al formulario
    formNuevoAnime.addEventListener('submit', async (event) => {
        //prevengo el comportamiento por defecto del formulario
        event.preventDefault();
        //obtengo los datos del formulario
        // const formData = new FormData(formNuevoAnime);
        //obtengo los valores de los inputs
        const idAnime = document.getElementById('id').value;
        const titulo = document.getElementById('titulo').value;
        const genero = document.getElementById('genero').value;
        const duracion = document.getElementById('duracion').value;
        const imagen = document.getElementById('imagen').files[0] || document.getElementById('imagen').getAttribute('data-current-image');
        ;
        //valido los inputs
        if (titulo === '' || genero === '' || duracion === '' || imagen === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        let url = 'http://localhost:8080/api/animes';
        let method = 'POST';

        // construir el objeto con los datos del anime
        const animeData = {
            titulo: titulo,
            genero: genero,
            duracion: duracion,
            imagen: imagen.name 
        };
             // Si hay un ID de película (es una modificación), incluirlo en el objeto movieData
            if (idAnime) {
                animeData.idAnime = idAnime;
                method = 'PUT';
            }
        // levanto solo el nombre del file para enviarlo a la api
        // const imageName = imagen.name;
        //configuracion de options, es un post y necesita body
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(animeData)
        };
        //realizo la peticion fetch a la api para agregar una pelicula
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Error al guardar el anime');
            }

            const responseData = await response.json();

            if (method === 'POST') {
                // si el codigo es 201 la pelicula se creo correctamente
                if (response.status !== 201) {
                    alert('Error al guardar el anime');
                    throw new Error('Error al guardar el anime');
                }
                alert('Anime agregado correctamente')
            } else {
                // si el codigo es 200, el anime se modifico correctamente
                if (response.status !== 200) {
                    alert('Error al modificar el anime');
                    throw new Error('Error al modificar el anime');
                }
                alert('Anime modificado correctamente');
            }

            formNuevoAnime.reset();
            location.reload(); //recargar la pagina para mostrar los cambios
        } catch (error) {
            console.error('Error:', error);
            alert('Error al guardar el anime');
        }
    });

});