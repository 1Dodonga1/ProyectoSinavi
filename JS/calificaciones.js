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
            <li><a href="#" id="${productos.nombre}" class="MuestrameCali">${productos.nombre}</a></li>
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

  $(document).on('click', '.MuestrameCali', function () {
    let id = this.id;
    $.ajax({
      url: '../PHP/CalicacionExamen.php',
      type: 'GET',
      success: function (response) {
        
        let categ = JSON.parse(response);
        let cargando = "<h1>"+id+"</h1><br>";
        categ.forEach(Calificacion => {
          cargando += `
         <nav class="calificacion_examen">
            <h6>${Calificacion.nombre}</h6><h6>${Calificacion.cali}</h6>
         </nav>
         `;
        });
        document.querySelector('.contenido_Calificaciones').style.display = "flex";
        $('.contenido_Calificaciones').html(cargando);
      }
    });
  
   });
});