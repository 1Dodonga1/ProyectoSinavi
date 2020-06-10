<?php
include ('../PHP/conexion.php');
session_start(); 
$idUsua= $_SESSION['idUsuario'];
$query ="select Calificacion, Nombre from calificacion inner join examen on  examen.IdExamen=calificacion.Examen_IdExamen where ListaAsistencia_IdLista='18';";

$result = mysqli_query($connection,$query);
if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
$json = array();include ('conexion.php');
while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'nombre'=> $row['Nombre'],
      'cali'=> $row['Calificacion']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>