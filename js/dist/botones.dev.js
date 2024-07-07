"use strict";

// Función para eliminar una película
var eliminarAnime = function eliminarAnime(idAnime) {
  var options, response;
  return regeneratorRuntime.async(function eliminarAnime$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("http://localhost:8080/api/animes/".concat(idAnime), options));

        case 3:
          response = _context.sent;

          if (response.ok) {
            location.reload(); // Recarga la página para reflejar los cambios
          } else {
            console.error('Error eliminando el anime');
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Función para modificar una película (esto puede abrir un formulario modal, por ejemplo)


var modificarAnime = function modificarAnime(anime) {
  // Aquí puedes implementar la lógica para modificar una película.
  // Por ejemplo, abrir un formulario modal con los datos de la película para editar.
  console.log('Modificar anime:', anime);
};
//# sourceMappingURL=botones.dev.js.map
