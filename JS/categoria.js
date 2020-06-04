$(document).ready(function () {
  
  inicio();
  var banderaMostrarPreguntas=0;
  function inicio(){
  $.ajax({
    url: '../PHP/Categorias.php',
    type: 'GET',
     success: function (response) {
       console.log(response);
       let categ = JSON.parse(response);
       let cargando = '';
       categ.forEach(categoria => {
         cargando += `
         <li><a href="#" id="${categoria.id}" name="${categoria.nombre}" class="cargaPanelCategoria">${categoria.nombre}</a></li>`;
        });
       $('#Categoria').html(cargando);
    }
  });
  }
  function actualizacionPreguntas(){
    $.ajax({
      url: '../PHP/ActualizarPreguntas.php',
      type: 'POST',
      success: function (response) {
        let categ = JSON.parse(response);
        let cargando = '';
        categ.forEach(categoria => {
          cargando += `
          <li><a href="#">${categoria.Descripcion} "${categoria.tPregunta}"</a><img src="../imagenes/flechaAbajo.ico"
           class="abrir" name="${categoria.tPregunta}" id="${categoria.IdPreguntas}"><img src="../imagenes/boteBasura.ico" 
           class="eliminar" id="${categoria.IdPreguntas}"></li>
           <ul class="children" id="children-${categoria.IdPreguntas}"></ul>
          `;
        });
        $('.padre').html(cargando);
        document.querySelector('.contenidoCategoria').style.display = "block";
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
        document.querySelector('.Agregando-Materia').style.display = "none";
        inicio();
      }
    });
  });

  //para cargar las preguntas

  $(document).on('click', '.cargaPanelCategoria', function () {
    var Idcategora =this.id;
    var n = event.target;
    var nombre = n.name;//tipo de pregunta
    console.log(nombre); 
    $.ajax({
      url: '../PHP/preguntasCategoria.php',
      data: { Idcategora },
      type: 'POST',
      success: function (response) {
        let categ = JSON.parse(response);
        let cargando = ''; 
      categ.forEach(categoria => {
          cargando += `
          <li><a href="#">${categoria.Descripcion} "${categoria.tPregunta}"</a><img src="../imagenes/flechaAbajo.ico"
           class="abrir" name="${categoria.tPregunta}" id="${categoria.IdPreguntas}"><img src="../imagenes/boteBasura.ico" 
           class="eliminar" id="${categoria.IdPreguntas}"></li>
           <ul class="children" id="children-${categoria.IdPreguntas}"></ul>
          `;
      });
        $('.padre').html(cargando);
        var nom = '<h1>'+nombre+'</h1>';
        $('#nombre_Categoria').html(nom);
        document.querySelector('.contenidoCategoria').style.display = "block";
      }
    }); 
  });

 //para cargar las respuestas y poderlas hacer visibles
  $(document).on('click', '.abrir', function () {
    var id= this.id; //id de la pregunta
    var t = event.target;
    var tipo=t.name;//tipo de pregunta
    var Idcategora = "#children-"+this.id;//comose llama el contenedor 
    var nombre="";
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
          cargando += '<li><button class="agregaRespuesta"  name="'+tipo+'" id="'+id+'">Agrega una respuesta</button></li>';
          $(''+Idcategora+'').html(cargando);
          document.querySelector('' + Idcategora + '').style.display = "block";
        }
      });
      banderaMostrarPreguntas = 1; 
      //console.log(banderaMostrarPreguntas);
    } else if (banderaMostrarPreguntas == 1){
      banderaMostrarPreguntas = 0;
      document.querySelector('' + Idcategora + '').style.display = "none";
      //console.log(banderaMostrarPreguntas);
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
  $(document).on('click', '.agregaRespuesta', function () {
    var id = this.id; //id de la pregunta
    var t = event.target;
    var tipo = t.name;//tipo de pregunta
    let boton ='<input type="button" id="'+id+'" name="'+tipo+'"class="agregaRespu" value="registrar">';  //agrege el boton dinamicamente para que tenga el el id de la pregunta
    document.querySelector('.Agregando-respuesta').style.display = "flex";
    $('.agregarBoton').html(boton);
  });
  $(document).on('click', '.cerrar', function () {
    document.querySelector('.Agregando-respuesta').style.display = "none";
  });

  //agrgar preguntas
  $(document).on('click', '.agregaPreg', function () {
    $.ajax({
      url: '../PHP/AgregaPreguntas.php',
      data: $("#aPregunta").serialize(),
      type: 'POST',
      success: function (response) {
        console.log(response);
        document.querySelector('.Agregando-respuesta').style.display = "none";
        actualizacionPreguntas();
      }
    });
  });
  //Agrega respuestas
  $(document).on('click', '.agregaRespu', function () {
    var id = this.id; //id de la pregunta
    var t = event.target;
    var tipo = t.name;//tipo de pregunta
    var Descripcion = $("#Descripcion").val();
    var Calificacion = $("#Calificacion").val();
    console.log(t.id);
    console.log(Descripcion);
    $.ajax({
      url: '../PHP/AgregaRespuesta.php',
      data: { id, tipo, Descripcion, Calificacion},
      type: 'POST',
      success: function (response) {
        console.log(response);
        document.querySelector('.Agregando-respuesta').style.display = "none";
        actualizacionPreguntas();
      } 
    });
  });

  //eliminar pregunta
  $(document).on('click', '.eliminar', function () {  
    if (confirm('Estas seguro(a) de eliminar esta pregunta?')) {
      var id = this.id; //id de la pregunta
      $.post('../PHP/eliminarPregunta.php?jds', { id }, (response) => {
        console.log(response);
        actualizacionPreguntas();
      });
    }
  });
  //eliminar respuesta
  $(document).on('click', '.eliminaRespuesta', function () {
    if (confirm('Estas seguro(a) de eliminar esta respuesta?')) {
      var id = this.id; //id de la pregunta
      $.post('../PHP/eliminarRespuesta.php', { id }, (response) => {
        console.log(response);
        actualizacionPreguntas();
      });
    }
  });
});