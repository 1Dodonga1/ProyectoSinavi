$(document).ready(function () {
  $(document).on('click', '.eliminarMateria', function () {
    if (confirm('Estas seguro(a) de eliminar esta Materia, no podras recuperar los datos?')) {
      $.ajax({
        url: '../PHP/eliminarMateria.php',
        type: 'GET',
        success: function (response) {
          window.location.href = "../HTML/materias.html";
        }
      });
    }
  });
});