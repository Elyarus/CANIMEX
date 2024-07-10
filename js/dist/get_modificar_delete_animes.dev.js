"use strict";

document.addEventListener('DOMContentLoaded', function _callee3() {
  var options, response, data, animes, tbody;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(fetch('http://localhost:8080/api/animes', options));

        case 4:
          response = _context3.sent;

          if (response.ok) {
            _context3.next = 7;
            break;
          }

          throw new Error("HTTP error! Status: ".concat(response.status));

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context3.sent;
          console.log(data);
          animes = data;
          tbody = document.getElementById('bodyTableAnimes');
          animes.forEach(function (anime) {
            var tr = document.createElement('tr');
            var idAnime = document.createElement('td');
            idAnime.textContent = anime.idAnime;
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
            var btnModificar = document.createElement('button');
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
          _context3.next = 19;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](1);
          console.error('Error fetching animes:', _context3.t0);

        case 19:
          console.log(document.querySelectorAll('.btnModificar')); // agregar eventos despues de crear los botones

          document.querySelectorAll('.btnModificar').forEach(function (button) {
            button.addEventListener('click', function _callee(event) {
              var row, animeId, _response, _data, animeUnico;

              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("hizo click");
                      console.log(event);
                      console.log(event.target); // etiqueda de html del button que presiono

                      row = event.target.closest('tr');
                      console.log(row);
                      animeId = row.querySelector('td:first-child').innerText.trim(); //de la fila levanta el id del anime por su clase, por un selector hijo primero

                      _context.prev = 6;
                      _context.next = 9;
                      return regeneratorRuntime.awrap(fetch("http://localhost:8080/api/animes?id=".concat(animeId)));

                    case 9:
                      _response = _context.sent;

                      if (_response.ok) {
                        _context.next = 12;
                        break;
                      }

                      throw new Error('Error al obtener los datos del anime');

                    case 12:
                      _context.next = 14;
                      return regeneratorRuntime.awrap(_response.json());

                    case 14:
                      _data = _context.sent;
                      animeUnico = _data[0];
                      console.log(_data); // son los id del formulario, como son unicos e irrepetibles dentro del html sabe a quien insertarles los valores

                      document.getElementById('id').value = animeUnico.idAnime;
                      document.getElementById('titulo').value = animeUnico.titulo;
                      document.getElementById('genero').value = animeUnico.genero;
                      document.getElementById('duracion').value = animeUnico.duracion;
                      _context.next = 26;
                      break;

                    case 23:
                      _context.prev = 23;
                      _context.t0 = _context["catch"](6);
                      console.error('Erorr:', _context.t0);

                    case 26:
                    case "end":
                      return _context.stop();
                  }
                }
              }, null, null, [[6, 23]]);
            });
          }); // evento para eliminar

          document.querySelectorAll('.btnEliminar').forEach(function (button) {
            button.addEventListener('click', function _callee2(event) {
              var row, animeId, _response2, _data2;

              return regeneratorRuntime.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      row = event.target.closest('tr');
                      animeId = row.querySelector('td:first-child').innerText.trim();
                      _context2.prev = 2;
                      _context2.next = 5;
                      return regeneratorRuntime.awrap(fetch("http://localhost:8080/api/animes?id=".concat(animeId), {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }));

                    case 5:
                      _response2 = _context2.sent;

                      if (_response2.ok) {
                        _context2.next = 9;
                        break;
                      }

                      alert('Error al eliminar el anime');
                      throw new Error('Error al eliminar el anime');

                    case 9:
                      _context2.next = 11;
                      return regeneratorRuntime.awrap(_response2.json());

                    case 11:
                      _data2 = _context2.sent;
                      // si da ok muestro alerta que se elimino bien
                      alert('Anime eliminado correctamente');
                      console.log(_data2);
                      location.reload(); // recargo la pagina

                      _context2.next = 20;
                      break;

                    case 17:
                      _context2.prev = 17;
                      _context2.t0 = _context2["catch"](2);
                      console.error('Error:', _context2.t0);

                    case 20:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, null, null, [[2, 17]]);
            });
          });

        case 22:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 16]]);
});
//# sourceMappingURL=get_modificar_delete_animes.dev.js.map
