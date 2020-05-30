<?php 
  include ('../PHP/conexion.php');
  session_start();
  $id= $_SESSION['idMateria'];
  $nombCategoria=$_POST['NomCategoria'];
  
  $query ="INSERT INTO categoria (Nombre, Materias_IdMaterias) VALUES ('$nombCategoria', '$id');";
  $result = mysqli_query($connection,$query);
    if($result===TRUE){
      echo 'categoria Agregada agregado';
    }else{
        echo 'no agregada';
    }
?>