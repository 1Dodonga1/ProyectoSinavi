$(document).ready(function (){
  inicio();
  function inicio(){
    $.ajax({
      url: '../PHP/preguntasTodas.php',
      type: 'GET',
      success: function (response) {
        console.log(response);
        let categ = JSON.parse(response);
        let cargando = '';
        categ.forEach(preguntas => {
          cargando += `
         <li><img src="../imagenes/pregunta.png"><a id="${preguntas.idPregunta}" href="#" >
         ${preguntas.descripcion}</a><h4>Pts:${preguntas.puntos}</h4>
         <img src="../imagenes/boteBasura.ico"  class="Eliminar" id="${preguntas.idPregunta}"></li>`;
        });
        $('#preguntas').html(cargando);
      }
    });
  }
  $(document).on('click', '.Eliminar', function () {
    id = this.id;
    $.ajax({
      url: '../PHP/eliminar-Pregunta.php',
      data: { id },
      type: 'POST',
      success: function (response) {
        console.log(response);
        inicio();
      }
    });
  });
});