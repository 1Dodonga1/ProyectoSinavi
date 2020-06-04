<?php 
  include ('../PHP/conexion.php');
  session_start();
  $id= $_SESSION['Idcategora'];
  $descripcion=$_POST['Descripcion'];
  $tPregunta=$_POST['Tipo'];
  
  $query ="INSERT INTO preguntas (Descripcion, Categoria_IdCategoria, TipoPregunta_IdTipos) VALUES ('$descripcion', '$id', '$tPregunta');";
  $result = mysqli_query($connection,$query);
    if($result===TRUE){
      echo 'si';
    }else{
        echo $tPregunta;
    }
?>