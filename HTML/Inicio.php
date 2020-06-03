<?php
  session_start();
  $NomMateria = $_SESSION['nombreMateria'];
  if($NomMateria== null || $NomMateria=''){
    echo 'seleciona una materia';
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="../CSS/StyleInicio.css?3daafse42">
</head>
<body>
  <!--Barra que se carga desde la clase Staic.js-->
  <nav class="navegacion" id="barra"></nav>
  <!--barra perfil que se carga desde la clase Staic.js-->
  <h1 id="h1"><?php  echo $_SESSION['nombreMateria']?></h1>
  <nav id="perfil"></nav>

  <div id="Categoria"> </div>
   <!--contenido-->
   <div class="contenedorInicio">
      <nav class="CategoriaPreguntas"> 
        <a href="../HTML/categoria.html">Categorias</a>
        <img class="ima" src="../imagenes/categoria.jpg">
        <button id="Newcategoria">Nueva Categoria</button>
        <button id="categoria" onclick="window.location.href='../HTML/categoria.html'">Ver Categorias</button>
      </nav>

      <nav class="Examenes">
        <a href="../HTML/examen.html">Examenes</a>
        <img class="ima" src="../imagenes/examen.jpg">
        <button id="NewExamen">Nuevo Categoria</button>
        <button id="Examen" onclick="window.location.href='../HTML/examen.html'">Ver Examenes</button>
      </nav>
  </div>
  <div class="contenedorInicio">
      <nav class="Alumnos">
        <a href="../HTML/alumnos.html">Alumnos</a>
        <img class="ima" src="../imagenes/alumnos.jpg">
        <button id="Lista" onclick="window.location.href='../HTML/alumnos.html'">Lista de alumnos</button>
      </nav>
      <nav class="Calificaciones">
        <a href="../HTML/calificaciones.php">Calificaciones</a>
        <img  class="ima" src="../imagenes/califica.jpg">
        <button id="Calificaciones" onclick="window.location.href='../HTML/calificaciones.php'">revisar Calificaciones</button>
      </nav>
  </div>
    

    <!--<script src="../JS/categoria.js"></script>-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="../JS/Static.js?6f"></script>
</body>
</html>