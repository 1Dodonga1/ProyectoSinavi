<?php
include ('../PHP/conexion.php');
 session_start();
 $nu=$_SESSION['idExamen'];
$query ="select Preguntas_IdPreguntas, Descripcion, puntos FROM examen_has_preguntas as e 
inner join preguntas as p on e.Preguntas_IdPreguntas=p.IdPreguntas where Examen_IdExamen=$nu;";

$result = mysqli_query($connection,$query);
if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
$json = array();
while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'descripcion' => $row['Descripcion'],
      'idPregunta' => $row['Preguntas_IdPreguntas'],
      'puntos' => $row['puntos']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>