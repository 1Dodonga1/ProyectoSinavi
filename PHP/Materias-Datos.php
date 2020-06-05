<?php
include ('../PHP/conexion.php');
//consulta de los datos de la materia seleccionada y creacion de las varibles 
//session para poder utilizarlas en el trascurso
$id=$_POST['id'];
$query ="select *from materias where 	IdMaterias=$id;";

$result = mysqli_query($connection,$query);
if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
$row = mysqli_fetch_array($result);
     session_start();
      $_SESSION['idMateria']=$id;
      $_SESSION['nombreMateria']=$row['Materia'];
      $_SESSION['codigo']=$row['codigo'];
     

?>