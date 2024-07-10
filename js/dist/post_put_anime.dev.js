"use strict";

// cuando el dom se cargue
document.addEventListener('DOMContentLoaded', function _callee2() {
  var formNuevoAnime;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          formNuevoAnime = document.getElementById('formNuevoAnime'); //agrego el evento submit al formulario

          formNuevoAnime.addEventListener('submit', function _callee(event) {
            var idAnime, titulo, genero, duracion, imagen, url, method, animeData, options, response, responseData;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //prevengo el comportamiento por defecto del formulario
                    event.preventDefault(); //obtengo los datos del formulario
                    // const formData = new FormData(formNuevoAnime);
                    //obtengo los valores de los inputs

                    idAnime = document.getElementById('id').value;
                    titulo = document.getElementById('titulo').value;
                    genero = document.getElementById('genero').value;
                    duracion = document.getElementById('duracion').value;
                    imagen = document.getElementById('imagen').files[0] || document.getElementById('imagen').getAttribute('data-current-image');
                    ; //valido los inputs

                    if (!(titulo === '' || genero === '' || duracion === '' || imagen === '')) {
                      _context.next = 10;
                      break;
                    }

                    alert('Todos los campos son obligatorios');
                    return _context.abrupt("return");

                  case 10:
                    url = 'http://localhost:8080/api/animes';
                    method = 'POST'; // construir el objeto con los datos del anime

                    animeData = {
                      titulo: titulo,
                      genero: genero,
                      duracion: duracion,
                      imagen: imagen.name
                    }; // Si hay un ID de película (es una modificación), incluirlo en el objeto movieData

                    if (idAnime) {
                      animeData.idAnime = idAnime;
                      method = 'PUT';
                    } // levanto solo el nombre del file para enviarlo a la api
                    // const imageName = imagen.name;
                    //configuracion de options, es un post y necesita body


                    options = {
                      method: method,
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(animeData)
                    }; //realizo la peticion fetch a la api para agregar una pelicula

                    _context.prev = 15;
                    _context.next = 18;
                    return regeneratorRuntime.awrap(fetch(url, options));

                  case 18:
                    response = _context.sent;

                    if (response.ok) {
                      _context.next = 21;
                      break;
                    }

                    throw new Error('Error al guardar el anime');

                  case 21:
                    _context.next = 23;
                    return regeneratorRuntime.awrap(response.json());

                  case 23:
                    responseData = _context.sent;

                    if (!(method === 'POST')) {
                      _context.next = 31;
                      break;
                    }

                    if (!(response.status !== 201)) {
                      _context.next = 28;
                      break;
                    }

                    alert('Error al guardar el anime');
                    throw new Error('Error al guardar el anime');

                  case 28:
                    alert('Anime agregado correctamente');
                    _context.next = 35;
                    break;

                  case 31:
                    if (!(response.status !== 200)) {
                      _context.next = 34;
                      break;
                    }

                    alert('Error al modificar el anime');
                    throw new Error('Error al modificar el anime');

                  case 34:
                    alert('Anime modificado correctamente');

                  case 35:
                    formNuevoAnime.reset();
                    location.reload(); //recargar la pagina para mostrar los cambios

                    _context.next = 43;
                    break;

                  case 39:
                    _context.prev = 39;
                    _context.t0 = _context["catch"](15);
                    console.error('Error:', _context.t0);
                    alert('Error al guardar el anime');

                  case 43:
                  case "end":
                    return _context.stop();
                }
              }
            }, null, null, [[15, 39]]);
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
//# sourceMappingURL=post_put_anime.dev.js.map
