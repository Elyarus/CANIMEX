// document.addEventListener('DOMContentLoaded', async () => {
//     //obtengo el formulario
//     formEditarAnime = document.getElementById('formEditarAnime');
//     formEditarAnime.addEventListener('submit', async (event) => {
//         //prevengo el comportamiento por defecto dl formulario
//         event.preventDefault();
//         //obtengo los datos del formulario
//         const formData = new FormData(formEditarAnime);
//         //obtengo los valores de los inputs
//         const idAnime = formData.get('idAnime');
//         const titulo = formData.get('titulo');
//         const genero = formData.get('genero');
//         const duracion = formData.get('duracion');
//         const imagen = formData.get('imagen');
//         //valido los inputs
//         if (idAnime === '' || titulo === '' || genero === '' || duracion === '' || imagen === ''){
//             alert('Todos los campos son obligatorios');
//             return;
//         }
//         //levanto solo el nombre del file para enviarlo a la api
//         const imageName = imagen.name;
//         //configuracion de options es un put y necesita body
//         const options = {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 idAnime: idAnime,
//                 titulo: titulo,
//                 genero: genero,
//                 duracion: duracion,
//                 imagen: imageName
//             })
//         };
//         //realizo la peticion fetch a la api para editar una pelicula
//         const response = await fetch('http://localhost:8080/api/animes', options);
//         //obtengo la respuesta
//         const data = await response.json();
//         //si la respuesta es correcta, muestra un mensaje de exito y limpio los inputs del formulario
//         // si el codigo es 200, el anime se edito correctamente
//         if (response.status === 200) {
//             alert('Anime editado correctamente');
//             formEditarAnime.reset();
//             // que se recargue la pagina para ver la pelicula editada
//             location.reload();
//         }else {
//             alert('Error al editar el anime');
//         }
//     });
// });
"use strict";
//# sourceMappingURL=put_anime.dev.js.map
