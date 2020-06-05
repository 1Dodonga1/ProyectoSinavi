<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/StyleInicio.css?6">
  <link rel="stylesheet" href="../CSS/calificaciones.css?dss">
  <title>Document</title>
</head>
<body>
    <nav class="navegacion" id="barra"></nav>
    <nav id="perfil"></nav>
 
    <input type="text" id="filtroAlumno" ></input>
    <div class="contenido_filtro">
      <ul id="filtro_alumnos">      
      </ul>
    </div>
    <div class="cerrar">+</div>
    <div class="contenido_Calificaciones">
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="../JS/Static.js"></script>
    <script src="../JS/calificaciones.js?fsss"></script>
</body>
</html>