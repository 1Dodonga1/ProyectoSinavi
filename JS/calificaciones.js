$(document).ready(function () {
  $('#filtroAlumno').keyup(function () {
    if ($('#filtroAlumno').val()) {
      let filtro = $("#filtroAlumno").val();
      $.ajax({
        url: '../PHP/filtroAlumno.php',
        data: { filtro },
        type: 'POST',
        success: function (response) {
          let mate = JSON.parse(response);
          let cargando = '';
          mate.forEach(productos => {
            cargando += `
            <li><a href="#" id="${productos.id}">${productos.nombre}</a></li>
          `;
          });
          $('#filtro_alumnos').html(cargando);
        }
      });
    } else {
      let cargando = '';
      $('#filtro_alumnos').html(cargando);
    }
  }); 

});