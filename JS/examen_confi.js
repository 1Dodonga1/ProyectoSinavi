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

//----------eliminar el examen------------
  $(document).on('click', '#eliminarExamen', function () {
    if (confirm('Estas seguro(a) de eliminar este examen?')) {
      $.get('../PHP/eliminarExamen.php',  (response) => {
        //console.log(response);
        location.href = "../HTML/examen.html";
      });
    }
  });

  //para hacer visible el formulario de selecionar forma de agregar pregunta
  $(document).on('click', '#banco', function () {
    document.querySelector('#selecForma').style.display = "flex";
  });

  $(document).on('click', '.cerrar', function () {
    document.querySelector('#selecForma').style.display = "none";
  });

  //para hacer visible el vid de seleccionar categoria
  $(document).on('click', '.selec', function () {
    aleatorioSelec = this.id;
    document.querySelector('#selecForma').style.display = "none";
    document.querySelector('#selecCatego').style.display = "flex";
    cargando = '<button class="ok" id="'+aleatorioSelec+'">ok</button><button class="cerrar" >Cancelar</button>';
    $('.agregaBoton').html(cargando);

  });
  $(document).on('click', '.cerrar', function () {
    document.querySelector('#selecCatego').style.display = "none";
  });
  
  $(document).on('click', '.ok', function () {
    console.log("ho");
    aleatorioSelec = this.id;
    if (aleatorioSelec==1){
      document.querySelector('#NumPreguntas').style.display = "flex"; 
    }else{
      document.querySelector('#IndvPregunta').style.display = "flex"; 
    }

  });
  $(document).on('click', '.cerrar', function () {
    document.querySelector('#NumPreguntas').style.display = "none";
  });


});

