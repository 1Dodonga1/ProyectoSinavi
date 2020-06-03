$(document).ready(function () {
  
  inicio();
  var banderaMostrarPreguntas=0;
  function inicio(){
  $.ajax({
    url: '../PHP/Categorias.php',
    type: 'GET',
     success: function (response) {
       let categ = JSON.parse(response);
       let cargando = '';
       categ.forEach(categoria => {
         cargando += `
         <li><a href="#" id="${categoria.id}" class="cargaPanelCategoria">${categoria.nombre}</a></li>`;
       });
       $('#Categoria').html(cargando);
    }
  });
  }
 //para hacer visible el formulario de agregar materia
  $(document).on('click', '#BotonCategoria', function () {
    document.querySelector('.Agregando-Materia').style.display = "flex";
  });

  $(document).on('click', '.cerrar', function () {
    document.querySelector('.Agregando-Materia').style.display = "none";
  });

  //agregar categoria
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

  //para cargar las preguntas

  $(document).on('click', '.cargaPanelCategoria', function () {
    var Idcategora =this.id;
    $.ajax({
      url: '../PHP/preguntasCategoria.php',
      data: { Idcategora },
      type: 'POST',
      success: function (response) {
        let categ = JSON.parse(response);
        let cargando = ''; 
      categ.forEach(categoria => {
          cargando += `
          <li><a href="#">${categoria.Descripcion}</a><img src="../imagenes/flechaAbajo.ico"
           class="abrir" id="${categoria.IdPreguntas}"><img src="../imagenes/boteBasura.ico" 
           class="eliminar" id="${categoria.IdPreguntas}"></li>
           <ul class="children" id="children-${categoria.IdPreguntas}"></ul>
          `;
      });
        $('.padre').html(cargando);
        document.querySelector('.contenidoCategoria').style.display = "block";
      }
    }); 
  });

 //para cargar las respuestas y poderlas hacer visibles
  $(document).on('click', '.abrir', function () {
    var id= this.id;
    var Idcategora = "#children-"+this.id; 
    if (banderaMostrarPreguntas == 0) {
      $.ajax({
        url: '../PHP/respuestasPreguntass.php',
        data: { id},
        type: 'POST',
        success: function (response) {
          let categ = JSON.parse(response);
          let cargando = '';
          categ.forEach(categoria => {
            cargando += `
          <li><a href="#">${categoria.Descripcion}</a> <button id="${categoria.id}" Class="eliminaRespuesta">eliminar</button></li>
          `;
          });
          cargando += '<li><button id="agregaRespuesta">Agrega una respuesta</button></li>';
          $(''+Idcategora+'').html(cargando);
          document.querySelector('' + Idcategora + '').style.display = "block";
        }
      }); 
      banderaMostrarPreguntas = 1; 
    } else if (banderaMostrarPreguntas == 1){
      banderaMostrarPreguntas = 0;
      document.querySelector('' + Idcategora + '').style.display = "none";
    }
  });

  //hacer visibles contenedores para agregar pregunta
  $(document).on('click', '#AgregaPregunta', function () {
    document.querySelector('.Agregando-Pregunta').style.display = "flex";
  });
  $(document).on('click', '.cerrar', function () {
    document.querySelector('.Agregando-Pregunta').style.display = "none";
  });

  //hacer visibles contenedores para agregar respuesta
  $(document).on('click', '#agregaRespuesta', function () {
    document.querySelector('.Agregando-respuesta').style.display = "flex";
  });
  $(document).on('click', '.cerrar', function () {
    document.querySelector('.Agregando-respuesta').style.display = "none";
  });

  //agrgar pregunta
  $(document).on('click', '.agregaPreg', function () {
    $.ajax({
      url: '../PHP/AgregaPreguntas.php',
      data:  $("#aPregunta").serialize(),
      type: 'Post',
      success: function (response) {
        console.log(response);
        document.querySelector('.Agregando-respuesta').style.display = "none";
        inicio();
      }
    });
  });

  
});