$(document).ready(function(){
  inicio();
  function inicio(){
    $.ajax({
      url: '../PHP/examenesMateria.php',
      type: 'GET',
      success: function (response) {
        console.log(response);
        let categ = JSON.parse(response);
        let cargando = '';
        categ.forEach(examenes => {
          cargando += `
         <li><img src="../imagenes/examen.png"><a href="#" class="seleccionaExamen" id="${examenes.id}">${examenes.nombre}</a></li>`;
        });
        $('#examenes').html(cargando);
      }
    });
  }

  //hacer visible el la ventana para agreagar un examen
  $(document).on('click', '#agregarExamaen', function(){
    document.querySelector('#agrega').style.display = "flex";
  });
  $(document).on('click', '.cerrar', function(){
    document.querySelector('#agrega').style.display="none";
  });

  //agregar un nuevo examen 
  $(document).on('click', '.agregaExamen', function () {
    $.ajax({
      url: '../PHP/AgregarExamen.php',
      data: $('#aExamen').serialize(),
      type: 'POST',
      success: function (response) {
        document.querySelector('#agrega').style.display = "none";
        inicio();
      }
    });
  });

  //seleccionando un examen
  $(document).on('click', '.seleccionaExamen', function(){
    id=this.id;
    $.ajax({
      url: '../PHP/examen-Datos.php',
      data: {id},
      type: 'POST',
      success: function (response) {
        console.log(response);
        location.href = "../HTML/Examen_confi.html";
      }
    });
  });
});