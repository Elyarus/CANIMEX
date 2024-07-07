"use strict";

// cuando el dom se cargue
document.addEventListener('DOMContentLoaded', function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // tengo que levantar los datos del formulario, validar los inputs, en caso de algun value vacio, mostrar un mensaje de error
          // y no hacer la peticion fetch
          // si los datos son correctos, realizo la peticion fetch post a la api para agregar una pelicula
          // si la respuesta es correcta, muestro un mensaje de exito y limpio los inputs del formulario
          //obtengo el formulario
          formNuevoAnime = document.getElementById('formNuevoAnime'); //agrego el evento submit al formulario

          formNuevoAnime.addEventListener('submit', function _callee(event) {
            var formData, titulo, genero, duracion, imagen, imageName, options, response, data;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //prevengo el comportamiento por defecto del formulario
                    event.preventDefault(); //obtengo los datos del formulario

                    formData = new FormData(formNuevoAnime); //obtengo los valores de los inputs

                    titulo = formData.get('titulo');
                    genero = formData.get('genero');
                    duracion = formData.get('duracion');
                    imagen = formData.get('imagen'); //valido los inputs

                    if (!(titulo === '' || genero === '' || duracion === '' || imagen === '')) {
                      _context.next = 9;
                      break;
                    }

                    alert('Todos los campos son obligatorios');
                    return _context.abrupt("return");

                  case 9:
                    // levanto solo el nombre del file para enviarlo a la api
                    imageName = imagen.name; //configuracion de options, es un post y necesita body

                    options = {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        titulo: titulo,
                        genero: genero,
                        duracion: duracion,
                        imagen: imageName
                      })
                    }; //realizo la peticion fetch a la api para agregar una pelicula

                    _context.next = 13;
                    return regeneratorRuntime.awrap(fetch('http://localhost:8080/api/animes', options));

                  case 13:
                    response = _context.sent;
                    _context.next = 16;
                    return regeneratorRuntime.awrap(response.json());

                  case 16:
                    data = _context.sent;

                    //si la respuesta es correcta, muestro un mensaje de exito y limpio los inputs del formulario
                    // si el codigo es 201, la pelicula se agrego correctamente
                    if (response.status === 201) {
                      alert('Anime agregada correctamente');
                      formNuevoAnime.reset(); // que se recargue la pagina para ver la pelicula agregada

                      location.reload();
                    } else {
                      alert('Error al agregar el anime');
                    }

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
//# sourceMappingURL=post_anime.dev.js.map
