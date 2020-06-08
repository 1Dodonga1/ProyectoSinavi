<?php 
  include ('../PHP/conexion.php');
  session_start();
  $id= $_SESSION['idMateria'];
  $nombExamen=$_POST['NomExamen'];
  $pass=$_POST['Contraseña'];

  $query ="INSERT INTO examen (Nombre, Contraseña, Materias_IdMaterias) VALUES ('$nombExamen ', '$pass', '$id');";
  $result = mysqli_query($connection,$query);
    if($result===TRUE){
      echo 'Examen agregado';
    }else{
        echo 'no agregado';
    }
?>