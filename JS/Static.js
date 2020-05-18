$(document).ready(function () {

  BarraInicio();

function BarraInicio(){
  let barra=
     `    
        <img id="ima" src="../imagenes/logoMini.png" alt="LogoSinav" class="logo">
          <ul class="menu">

            <li><a href="#">Categorias</a></li>
            <ul class="children">
              <li><a href="#">Preguntas</a></li>
              <li><a href="#">Nueva pregunta</a></li>
              <li><a href="#">Nueva Categoria</a></li>
            </ul>
            <li><a href="#">Examenes</a></li>
            <ul class="children">
              <li><a href="#"> Examen</a></li>
            </ul>
            <li><a href="#">Alumnos</a></li>
            <li><a href="#">Calificaciones</a></li>
            <li><a href="#">cerrar</a></li>
          </ul> 
      `;
    $('#barra').html(barra);
}
});