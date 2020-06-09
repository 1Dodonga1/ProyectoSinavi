<?php
include ('conexion.php');
  session_start();
  $idExamen =$_SESSION['idExamen'];  
  
  $query = "DELETE FROM examen WHERE (IdExamen = '$idExamen');"; 
  $result = mysqli_query($connection, $query);
  

?>