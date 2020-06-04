<?php
include ('conexion.php');
  session_start();
  $idMateria =$_SESSION['idMateria'];  
  
  $query = "DELETE FROM materias WHERE (IdMaterias = '$idMateria');"; 
  $result = mysqli_query($connection, $query);

    unset($_SESSION['idMateria']);

?>