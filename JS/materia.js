$(document).ready(function () {

  inicio();

  //generando los botones dinamicante
  function inicio() {
    $.ajax({
      url: '../PHP/Materias.php',
      type: 'GET',
      success: function (response) {
        let mate = JSON.parse(response);
        let cargando = '';
        mate.forEach(materias => {
          cargando += `
         <button class="MateriasCargadas" id="${materias.IdMaterias}">${materias.nombre}</button>
          `;
        });
        $('#CargaMaterias').html(cargando);
      }
    });
  }
  //asinacion de eventos a botones generados dianamicamente
  $('#CargaMaterias').on('click','.MateriasCargadas',function () {
    let id = this.id;
    console.log(id);
    $.ajax({
      url: '../PHP/Materias-Datos.php',
      data: {id},
      type: 'POST',
      success: function (response) {
        console.log(response);
        location.href = "../HTML/inicio.php";
      }
    });
  });
});