<?php
  include ("../PHP/conexion.php");
  $id=$_POST['id'];
  $tipo=$_POST['tipo'];
  $descripcion=$_POST['Descripcion'];
  $califiacion=$_POST['Calificacion'];
  switch($tipo){
    case 1:
   $query="INSERT INTO respuesta (Descripcion, calificacion, boleano, Preguntas_IdPreguntas) 
      VALUES ('$descripcion', '$califiacion ', '0', '$id');";
    break;
    case 2:
      $query="INSERT INTO respuesta (Descripcion, calificacion, boleano, Preguntas_IdPreguntas) 
      VALUES ('$descripcion', '0', '$califiacion', '$id');";
    break;
    case 3:
      $query="INSERT INTO respuesta (Descripcion, calificacion, boleano, Preguntas_IdPreguntas) 
      VALUES ('$descripcion', '$califiacion', '0', '$id');";
    break;
  }

  $result = mysqli_query($connection,$query);
    if($result===TRUE){
      echo 'si';
    }else{
        echo 'no';
    }
?>