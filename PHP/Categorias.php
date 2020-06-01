<?php
include ('../PHP/conexion.php');
 session_start();
 $nu=$_SESSION['idMateria'];
$query ="select nombre from categoria where Materias_IdMaterias=$nu;";

$result = mysqli_query($connection,$query);
if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
$json = array();
while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'nombre' => $row['nombre']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>

