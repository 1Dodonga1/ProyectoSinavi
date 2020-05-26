<?php
include ('../PHP/conexion.php');

$query ="select IdExamen from examen";

$result = mysqli_query($connection,$query);
if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
$json = array();
while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'nombre'=> $row['Nombre'],
      'IdExamen'=> $row['IdExamen']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>