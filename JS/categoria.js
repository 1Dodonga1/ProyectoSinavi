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
         <button >${categoria.nombre}</button> <br> `;
       });
       $('#Categoria').html(cargando);
    }
  });
  }
  $(document).on('click', '#AgregarCategoria', function () {
    document.querySelector('.Agregando-Materia').style.display = "flex";
  });

  $(document).on('click', '.cerrar', function () {
    document.querySelector('.Agregando-Materia').style.display = "none";
  });


  $(document).on('click', '.agregaMateria', function () {
    var NomMateria = $("#NomMateria").val();
    var Codigo = $("#Codigo").val();
    console.log(NomMateria);
    console.log(Codigo);
    $.ajax({
     
      }
    });
});