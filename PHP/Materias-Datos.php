<?php
include ('../PHP/conexion.php');
require_once('../PHP/DatosMateria.php');
 $obj=new DatosMateria();

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
     // $obj-> setidMateria($row['IdMaterias']);
     // $obj-> setNombreMateria($row['Materia']);
     // $obj-> setCodigo($row['codigo']);

//echo $obj-> getNombreMateria();
 
 // echo header('Location: ../HTML/inicio.html');
   echo   $_SESSION['nombreMateria']
?>