<?php
include ('conexion.php');

if(isset($_POST['id'])) {
  $id = $_POST['id'];
  $query = "DELETE FROM respuesta WHERE (idRespuesta = '$id');"; 
  $result = mysqli_query($connection, $query);

  if (!$result) {
    die('no elimine respuesta');
  }
  echo "eliminado";  

}
?>