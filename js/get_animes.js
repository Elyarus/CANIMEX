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
            btnEliminar.addEventListener('click', () => eliminarAnime(anime.idAnime));
            const btnModificar = document.createElement('button');
            btnModificar.textContent = 'Modificar';
            btnModificar.classList.add('btnModificar');
            btnModificar.addEventListener('click', () => modificarAnime(anime));
            tdAcciones.appendChild(btnEliminar);
            tdAcciones.appendChild(btnModificar);
            tdImage.appendChild(img);
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
});
