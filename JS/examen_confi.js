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
    categorias();
    document.querySelector('#selecCatego').style.display = "flex";
    cargando = '<button class="ok" id="'+aleatorioSelec+'">ok</button>';
    $('.agregaBoton').html(cargando);
  });
  $(document).on('click', '.cerrar', function () {
    document.querySelector('#selecCatego').style.display = "none";
  });
  
  //boton agregar pregunta
  $(document).on('click', '.ok', function () {
    var aleatorioSelec = this.id;
    var Idcategora= $('input[name="radio"]:checked').val();
  
    if (aleatorioSelec==1){
      
      document.querySelector('#selecCatego').style.display = "none"; 
      document.querySelector('#NumPreguntas').style.display = "flex"; 
      $.ajax({
        url: '../PHP/numeroPreguntas.php',
        data: {Idcategora},
        type: 'POST',
        success: function (response) {
          let c=`<h5>/` + response +`</h5>`;
          console.log(c);
          $('.NuPreguntas').html(c);
        }
      });
    
    }else if(aleatorioSelec==2){
      document.querySelector('#selecCatego').style.display = "none";
      document.querySelector('#IndvPregunta').style.display = "flex";
      ///metodo de ajax para cargar las preguntas dependiendo la categoria
      $.ajax({
        url: '../PHP/preguntasCategoria.php',
        data: { Idcategora },
        type: 'POST',
        success: function (response) {
          
          let categ = JSON.parse(response);
          let c = '';
          categ.forEach(categoria => {
            c += `
            <li><input type="radio" id="${categoria.IdPreguntas}" name="preguntas" 
            value="${categoria.IdPreguntas}">${categoria.Descripcion}</li>`;
          });
          $('#preguntitas').html(c);
        }
      });
    }
  });

   //poder cerrar las ventanas
  $(document).on('click', '.cerrar', function () {
    document.querySelector('#NumPreguntas').style.display = "none";
  });
  $(document).on('click', '.cerrar', function () {
    document.querySelector('#IndvPregunta').style.display = "none";
  });
  $(document).on('click', '.cancela', function () {
    document.querySelector('#NumPreguntas').style.display = "none";
  });
  //agregar las categorias
   function categorias(){
       $.ajax({
         url: '../PHP/Categorias.php',
         type: 'GET',
         success: function (response) {
           let categ = JSON.parse(response);
           let cargando = '';
           categ.forEach(categoria => {
             cargando += `
         <li><input type="radio" id="${categoria.id}" name="radio" 
         value="${categoria.id}"> ${categoria.nombre} </li>`;
           });
           $('.MuestraCategoria').html(cargando);
         }
       });
   }


   //metodo para agregar preguntas a el examen
  $(document).on('click', '#AgregaPreguntaAlExamen', function () {
    var pregunta = $('input[name="preguntas"]:checked').val();
    $.ajax({
      url: '../PHP/AgregarPreguntasAlExamen.php',
      data: { pregunta },
      type: 'POST',
      success: function (response) {
          console.log(response);
          document.querySelector('#IndvPregunta').style.display = "none";
          inicio();
      }
    });
  });

  $(document).on('click', '#AgregaP', function () {
    location.href = "../HTML/categoria.html";
  });
});

