<?php
  //traerme las preguntas de bd
  $id=$_POST['id'];
  include ('../PHP/conexion.php');

  $query ="select idRespuesta,Descripcion,calificacion, boleano from respuesta where Preguntas_IdPreguntas=$id;";
  $result = mysqli_query($connection,$query);


  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
  $json = array();
  while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'calificacion'=> $row['calificacion'],
      'Descripcion'=> $row['Descripcion'],
      'boleano'=> $row['boleano'],
      'id'=> $row['idRespuesta'],
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
    
?>