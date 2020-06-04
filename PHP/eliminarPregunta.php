<?php
include ('conexion.php');

if(isset($_POST['id'])) {
  $id = $_POST['id'];
  $query = "DELETE FROM preguntas WHERE (IdPreguntas = '$id');"; 
  $result = mysqli_query($connection, $query);

  if (!$result) {
    die('no elimine pregunta');
  }
  echo "eliminado";  

}
?>