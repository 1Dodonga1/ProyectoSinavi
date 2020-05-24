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
         console.log("dasdf");
         cargando += `
         <button >${categoria.nombre}</button><br> `;

       });
       $('#Categoria').html(cargando);
    }
  });
  }
});