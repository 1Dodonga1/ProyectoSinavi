<?php
  //traerme el id de las preguntas
  include ('../PHP/conexion.php');
  session_start();
  $id=$_SESSION['Idcategora'];
 
  $query ="select IdPreguntas from preguntas where Categoria_IdCategoria=$id;";
  $result = mysqli_query($connection,$query); 
  
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
  $json = array();
  while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'IdPreguntas'=> $row['IdPreguntas']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
    
?>