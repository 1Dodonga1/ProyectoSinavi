<?php
  //traerme las preguntas de bd
  include ('../PHP/conexion.php');
  session_start();
     $id=$_POST['Idcategora'];
     $_SESSION['Idcategora']=$id;
 

  $query ="select IdPreguntas, Descripcion, TipoPregunta_IdTipos from preguntas where Categoria_IdCategoria=$id;";
  $result = mysqli_query($connection,$query); 
  
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
  $json = array();
  while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'IdPreguntas'=> $row['IdPreguntas'],
      'Descripcion'=> $row['Descripcion'],
      'tPregunta'=> $row['TipoPregunta_IdTipos']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
    
?>