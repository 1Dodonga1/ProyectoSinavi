<?php
include ('conexion.php');
session_start(); 
$idMateria= $_SESSION['idMateria'];
$_filtro=$_POST['filtro'];
$query ="select IdLista, nombre from listaasistencia as lis inner join alumnos  on 
lis.Alumnos_IdAlumnos=alumnos.IdAlumnos  where lis.Materias_IdMaterias=$idMateria and alumnos.nombre like '$_filtro%';";

$result = mysqli_query($connection,$query);
if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }
$json = array();
while($row = mysqli_fetch_array($result)){
    $json[] = array(
      'id'=> $row['IdLista'],
      'nombre'=> $row['nombre']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
?>