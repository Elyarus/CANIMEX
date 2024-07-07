"use strict";

document.addEventListener('DOMContentLoaded', function _callee() {
  var options, response, data, animes, tbody;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('http://localhost:8080/api/animes', options));

        case 4:
          response = _context.sent;

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error("HTTP error! Status: ".concat(response.status));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context.sent;
          console.log(data);
          animes = data;
          tbody = document.getElementById('bodyTableAnimes');
          animes.forEach(function (anime) {
            var tr = document.createElement('tr');
            var tdTitle = document.createElement('td');
            tdTitle.textContent = anime.titulo;
            var tdGenres = document.createElement('td');
            tdGenres.textContent = anime.genero;
            var tdDuration = document.createElement('td');
            tdDuration.textContent = anime.duracion;
            var tdImage = document.createElement('td');
            var img = document.createElement('img');
            img.src = "../assets/img/" + anime.imagen;
            img.width = 150;
            img.alt = anime.titulo;
            img.classList.add('img-fluid', 'img-thumbnail');
            var tdAcciones = document.createElement('td');
            var btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.classList.add('btnEliminar');
            btnEliminar.addEventListener('click', function () {
              return eliminarAnime(anime.idAnime);
            });
            var btnModificar = document.createElement('button');
            btnModificar.textContent = 'Modificar';
            btnModificar.classList.add('btnModificar');
            btnModificar.addEventListener('click', function () {
              return modificarAnime(anime);
            });
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
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          console.error('Error fetching animes:', _context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 16]]);
});
//# sourceMappingURL=get_animes.dev.js.map
