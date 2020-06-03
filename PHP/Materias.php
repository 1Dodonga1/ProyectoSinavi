<?php
include ('../PHP/conexion.php');
session_start();
$id=$_SESSION['idUsuario'];

$query ="select * from materias where profesor_IdProfesor=$id ;";
//$query ="select * from materias where profesor_IdProfesor=1 ";

$result = mysqli_query($connection,$query);
if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
$json = array();
while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'nombre'=> $row['Materia'],
      'IdMaterias'=> $row['IdMaterias']
    );
}
  $jsonstring = json_encode($json);
  echo $jsonstring;


?>