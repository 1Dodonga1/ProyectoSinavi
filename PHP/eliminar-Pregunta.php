<?php
include ('conexion.php');

  $id = $_POST['id'];
  $query = "DELETE FROM examen_has_preguntas WHERE Preguntas_IdPreguntas = '$id';"; 
  $result = mysqli_query($connection, $query);

  if (!$result) {
    die('no elimine pregunta');
  }
  echo "eliminado";  

?>