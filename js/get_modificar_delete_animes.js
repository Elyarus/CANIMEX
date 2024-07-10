document.addEventListener('DOMContentLoaded', async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch('http://localhost:8080/api/animes', options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        const animes = data;
        const tbody = document.getElementById('bodyTableAnimes');
        
        animes.forEach(anime => {
            const tr = document.createElement('tr');
            const idAnime = document.createElement('td')
            idAnime.textContent = anime.idAnime;
            const tdTitle = document.createElement('td');
            tdTitle.textContent = anime.titulo;
            const tdGenres = document.createElement('td');
            tdGenres.textContent = anime.genero;
            const tdDuration = document.createElement('td');
            tdDuration.textContent = anime.duracion;
            const tdImage = document.createElement('td');
            const img = document.createElement('img');
            img.src = "../assets/img/" + anime.imagen;
            img.width = 150;
            img.alt = anime.titulo;
            img.classList.add('img-fluid', 'img-thumbnail');
            const tdAcciones = document.createElement('td');
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.classList.add('btnEliminar');
            const btnModificar = document.createElement('button');
            btnModificar.textContent = 'Modificar';
            btnModificar.classList.add('btnModificar');
            tdAcciones.appendChild(btnEliminar);
            tdAcciones.appendChild(btnModificar);
            tdImage.appendChild(img);
            tr.appendChild(idAnime);
            tr.appendChild(tdTitle);
            tr.appendChild(tdDuration);
            tr.appendChild(tdGenres);
            tr.appendChild(tdImage);
            tr.appendChild(tdAcciones);
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error fetching animes:', error);
    }
    console.log(document.querySelectorAll('.btnModificar'));
    // agregar eventos despues de crear los botones
    document.querySelectorAll('.btnModificar').forEach(button => {
        button.addEventListener('click', async (event) => {
            console.log("hizo click");
            console.log(event);
            console.log(event.target); // etiqueda de html del button que presiono
            const row = event.target.closest('tr');
            console.log(row);
            const animeId = row.querySelector('td:first-child').innerText.trim(); //de la fila levanta el id del anime por su clase, por un selector hijo primero

            try {
                const response = await fetch(`http://localhost:8080/api/animes?id=${animeId}`);
                    if(!response.ok){
                        // lanzo una excepcion en caso de que no funcione el fetch, esto se ve en la consola
                        throw new Error('Error al obtener los datos del anime');
                    }
                const data = await response.json();
                const animeUnico = data[0];
                console.log(data);
                // son los id del formulario, como son unicos e irrepetibles dentro del html sabe a quien insertarles los valores
                document.getElementById('id').value = animeUnico.idAnime;
                document.getElementById('titulo').value = animeUnico.titulo;
                document.getElementById('genero').value = animeUnico.genero;
                document.getElementById('duracion').value = animeUnico.duracion;
            } catch (error) {
                console.error('Erorr:', error);
            }
        });
    });
    // evento para eliminar
    document.querySelectorAll('.btnEliminar').forEach(button => {
        button.addEventListener('click', async (event) => {
            const row = event.target.closest('tr');
            const animeId = row.querySelector('td:first-child').innerText.trim();
            try{
                const response = await fetch(`http://localhost:8080/api/animes?id=${animeId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    alert('Error al eliminar el anime');
                    throw new Error('Error al eliminar el anime');
                }
                const data = await response.json();
                // si da ok muestro alerta que se elimino bien

                alert('Anime eliminado correctamente');
                console.log(data);
                location.reload(); // recargo la pagina
                
            } catch (error) {
                console.error('Error:', error);
            }
        })
    })
});
