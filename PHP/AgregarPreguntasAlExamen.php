<?php 
  include ('../PHP/conexion.php');
  session_start();
  $idExamen= $_SESSION['idExamen'];
  $idPregunta= $_POST['pregunta'];
  $puntos= "5";
  
  $query ="INSERT INTO examen_has_preguntas (Examen_IdExamen, Preguntas_IdPreguntas, puntos) VALUES ('$idExamen', '$idPregunta', '$puntos');";
  $result = mysqli_query($connection,$query);
    if($result===TRUE){
      echo 'agregada';
    }else{
        echo 'no agregada';
    }
?>
