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
           <tr CateId="${productos.id}">         
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
          let mate = JSON.parse(response);
          let cargando = '';
          mate.forEach(productos => {
            cargando += `
           <tr CateId="${productos.id}">      
           <td>${productos.id}</td>
           <th><a href="#" id="${productos.id}">${productos.nombre}</a></th>
           <th><button id="eliminar">eliminar</button></th>
           </tr> 
          `;
          });
          $('#agrega_Cate').html(cargando);
        }
      });
    }else{
      inicio();
    }
  });
  $(document).on('click', '#eliminar', (e) => {
    if (confirm('Estas seguro(a) de eliminar este alumno(eliminaras todo lo relacionado con el)?')) {
      const element = $(this)[0].activeElement.parentElement.parentElement;
      const id = $(element).attr('CateID');
      $.post('../PHP/EliminarAlumno.php', { id }, (response) => {
        console.log(response);
        inicio();
      });
    }
  });
  
});
