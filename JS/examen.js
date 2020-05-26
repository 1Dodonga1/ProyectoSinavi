$(document).ready(function () {

  inicio();

  //generando los botones dinamicante
  function inicio() {
    $.ajax({
      url: '../PHP/examen.php',
      type: 'GET',
      success: function (response) {
        let mate = JSON.parse(response);
        let cargando = '';
        mate.forEach(examen => {
          cargando += `
         <button class="GetExamenes" id="${examen.IdExamen}">${examen.nombre}</button>
          `;
        });
        $('#GetExamenes').html(cargando);
      }
    });
  }
  //asinacion de eventos a botones generados dianamicamente
  $('#CargaExamenes').on('click','.GetExamenes',function () {
    let id = this.id;
    console.log(id);
    $.ajax({
      url: '../PHP/examen.php?fr',
      data: {id},
      type: 'POST',
      success: function (response) {
        console.log(response);
      }
    });
  });
});