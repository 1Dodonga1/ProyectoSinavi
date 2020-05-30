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
            <li><a href="../HTML/calificaciones.html?afak">Calificaciones</a></li>
          </ul>   `;
    $('#barra').html(barra);
}

//crea la barra perfil al mandar a llamar el js
function BarraPerfil(){
  let barra =
    `    <ul>
      <li><img src="../imagenes/usuario.png" ></ima> </li>
      <li>Teacher</li>
      <br>
      <li><button onclick="location.href='../PHP/cerrarSession.php'" >Cerrar</button></li>
    </ul> `;
  $('#perfil').html(barra);
}

});