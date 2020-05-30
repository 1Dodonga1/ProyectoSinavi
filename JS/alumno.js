$(document).ready(function () {
  inicio();
  function inicio() {
    $.ajax({
      url: '../PHP/ListaAlumnos.php',
      type: 'GET',
      success: function (response) {
        let mate = JSON.parse(response);
        let cargando = '';
        mate.forEach(productos => {
          cargando += `
           <tr>         
           <td>${productos.id}</td>
           <th>${productos.nombre}</th>
           <th><button id="eliminar">eliminar</button></th>
           </tr> 
          `;
        });
        $('#agrega_Cate').html(cargando);
      }
    });
   }
  $('#filtro').keyup(function () {
    if ($('#filtro').val()) {
      let filtro = $("#filtro").val();
      $.ajax({
        url: '../PHP/filtroAlumno.php',
        data: { filtro },
        type: 'POST',
        success: function (response) {
          console.log(response);
        }
      });
    }
  });
});
