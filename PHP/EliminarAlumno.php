<?php
include ('conexion.php');

if(isset($_POST['id'])) {
  $id = $_POST['id'];
  $query = "DELETE FROM sinav.listaasistencia WHERE (IdLista = $id);"; 
  $result = mysqli_query($connection, $query);

  if (!$result) {
    die('Query Failed.');
  }
  echo "Alumno eliminado";  

}
?>