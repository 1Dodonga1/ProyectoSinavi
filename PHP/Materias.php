<?php
include ('../PHP/conexion.php');

$query ="select *from materias where Profesor_IdProfesor=1;";

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