$(document).ready(function () {
  
  inicio();

  function inicio(){
  $.ajax({
    url: '../PHP/Categorias.php',
    type: 'GET',
     success: function (response) {
       let categ = JSON.parse(response);
       let cargando = '';
       categ.forEach(categoria => {
         cargando += `
         <li><a href="#">${categoria.nombre}</a></li>`;
       });
       $('#Categoria').html(cargando);
    }
  });
  }
  $(document).on('click', '#BotonCategoria', function () {
    document.querySelector('.Agregando-Materia').style.display = "flex";
  });

  $(document).on('click', '.cerrar', function () {
    document.querySelector('.Agregando-Materia').style.display = "none";
  });


  $(document).on('click', '.agregaMateria', function () {
    var NomMateria = $("#NomMateria").val();
    var Codigo = $("#Codigo").val();
  });   

  $(document).on('click', '.agregaMateria', function () {
    var NomCategoria = $("#NomMateria").val();
    $.ajax({
      url: '../PHP/AgregarCategoria.php',
      data: {NomCategoria},
      type: 'POST',
      success: function (response) {
        console.log(response);
        document.querySelector('.Agregando-Materia').style.display = "none";
        inicio();
      }
    });
  });
  
});