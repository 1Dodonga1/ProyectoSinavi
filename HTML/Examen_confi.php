<?php
  session_start();
  $nombreExamen=$_SESSION['nomExamen']
  ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sinav|Examen</title>
  <link rel="stylesheet" href="../CSS/StyleInicio.css?3dsfs">
  <link rel="stylesheet" href="../CSS/Examen.css?58fkl">
</head>
<body>
  <!--Barra que se carga desde la clase Staic.js-->
  <nav class="navegacion" id="barra"></nav>
  <!--barra perfil que se carga desde la clase Staic.js-->
  <nav id="perfil"></nav>
  <h1> <?php echo $nombreExamen ?> </h1>
  <button class="buton" id="eliminarExamen">Eliminar Examen</button>
  <button class="buton" id="banco">Preguntas del banco</button>
  <button class="buton">crear pregunta</button>
  <div id="listaExamenes">
    <ul id="preguntas">
      <li><img src="../imagenes/pregunta.png"><a href="#">uno</a><h4>ptno:5</h4></li>
      <li><img src="../imagenes/pregunta.png"><a href="#">dos</a><h4>puntos:5</h4></li>
      <li><img src="../imagenes/pregunta.png"><a href="#">tres</a><h4>puntos:5</h4></li>
      </li>
    </ul>
  </div>
<!--Seleccionar forma de banco de pregunta-->
 <div id="selecForma" class="globalModel">
  <div id="seleccionaForma">
    <div class="cerrar">+</div>
    <img  id="1" class="selec" src="../imagenes/aleatorio.png" alt="">
    <img  id="2" class="selec" src="../imagenes/seleccion.png" alt="">
  </div>
  </div>
<!--Seleccionar banco de preguntas-->
 <div id="selecCatego" class="globalModel">
  <div id="seleccionaCategoria">
    <div class="cerrar">+</div>
   <h4>Selecciona una Categoria</h4> 
     <ul>
       <li><input type="radio" id="male" name="gender" value="male"> español </li>
       <li><input type="radio" id="male" name="gender" value="male"> matematicas</li>
     </ul>
     <button>Seleccionar categoria</button>
  </div> 
  </div> 
  <!--Seleccionar banco de preguntas Aleatorias-->
   <div id="NumPreguntas" class="globalModel">
  <div id="nPreguntas">
   <h4>Nombre Categoria</h4>
   <h5>canntidad de preguntas</h5><input id="cantidadPreguntas" type="number"><h5 id="cantidadPreguntas">/15</h5>
   <h5>puntos por pregunta</h5><input name="puntos" type="number">
   <div class="agregaBoton">
     <button class="ok" >ok</button><button class="cerrar" >Cancelar</button>
   </div>
  </div>
  
  <!--Seleccionando preguntas individualmente-->
   <div id="IndvPregunta" class="globalModel">
   <div id="Categoria-preguntas">
     <div class="cerrar">+</div>
    <h4>Nombre Categoria</h4>
     <ul>
       <li><input type="radio" id="male" name="gender" value="male">pregunta 1</li>
       <li><input type="radio" id="male" name="gender" value="male">pregunta 2</li>
     </ul> 
    <button>Agregar</button>
   </div> 
   </div> 

  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="../JS/Static.js?6gs"></script>
  <script src="../JS/examen_confi.js?j65"></script>
</body>
</html>