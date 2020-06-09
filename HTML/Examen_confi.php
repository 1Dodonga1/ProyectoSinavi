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
  <link rel="stylesheet" href="../CSS/Examen.css?5sfd8l">
</head>
<body>
  <!--Barra que se carga desde la clase Staic.js-->
  <nav class="navegacion" id="barra"></nav>
  <!--barra perfil que se carga desde la clase Staic.js-->
  <nav id="perfil"></nav>
  <h1> <?php echo $nombreExamen ?> </h1>
  <button class="buton" id="eliminarExamen">Eliminar Examen</button>
  <button class="buton" id="banco">Preguntas del banco</button>
  <button class="buton" id="AgregaP">crear pregunta</button>
  <div id="listaExamenes">
    <ul id="preguntas">
      <!--preguntas que vienen desde base de datos dependiendo el examen-->
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
     <ul class="MuestraCategoria">
       <!--caategorias que vienen desde base de datos -->
     </ul>
     <div class="agregaBoton">
       <button class="ok">Seleccionar categoria</button>
     </div>
  </div> 
  </div> 
  <!--Seleccionar banco de preguntas Aleatorias-->
  <div id="NumPreguntas" class="globalModel">
  <div id="nPreguntas">
   <h4 >Configuración de Banco</h4>
   <h5>canntidad de preguntas</h5><input id="cantidadPreguntas" type="number"><div class="NuPreguntas"><h5>/15</h5></div>
   <h5>puntos por pregunta</h5><input name="puntos" type="number">
   <button >Agregar</button><button class="cancela" >Cancelar</button>
  </div>
  </div>
  <!--Seleccionando preguntas individualmente-->
   <div id="IndvPregunta" class="globalModel">
    <div id="Categoria-preguntas">
     <div class="cerrar">+</div>
    <h4>Selecciona una pregunta </h4>
     <ul id="preguntitas">
       <!--preguntas que vienen desde base de datos dependiendo la categoria-->
     </ul> 
    <button id="AgregaPreguntaAlExamen">Agregar</button>
   </div> 
   </div> 

  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="../JS/Static.js?6gs"></script>
  <script src="../JS/examen_confi.js?j6F1"></script>
</body>
</html>