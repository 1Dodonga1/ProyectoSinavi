$(document).ready(function () {

  BarraInicio();
  BarraPerfil();
  
//crea la barra del header al mandar a llamar el js
function BarraInicio(){
  let barra=
     `     <img id="ima" src="../imagenes/Untitled-1.png" class="logo">
          <ul class="menu">

            <li><a href="../HTML/categoria.html">Categorias</a></li>
            <li><a href="../HTML/examen.html">Examenes</a></li>
            <li><a href="../HTML/alumnos.html">Alumnos</a></li>
            <li><a href="../HTML/calificaciones.html">Calificaciones</a></li>
          </ul>   `;
    $('#barra').html(barra);
}

//crea la barra perfil al mandar a llamar el js
function BarraPerfil(){
  let barra =
    `    <ul>
      <li><img src="../imagenes/usuario.png" ></ima> </li>
      <li id="nombre">Nombre Apellido</li>
      <li id="usuario">usuario</li>
      <li><button id="cerrar">Cerrar</button></li>
    </ul> `;
  $('#perfil').html(barra);
}

});