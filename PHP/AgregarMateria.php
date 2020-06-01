<?php 
  include ('../PHP/conexion.php');
  session_start();
  $id= $_SESSION['idUsuario'];
  $nombMateria= $_POST['NomMateria'];
  $Codigo= $_POST['Codigo'];
  
  $query ="INSERT INTO sinav.materias(Materia, codigo, Profesor_IdProfesor) VALUES ('$nombMateria', '$Codigo', $id);";
  $result = mysqli_query($connection,$query);
    if($result===TRUE){
      echo 'Materia Agregada agregado';
    }else{
        echo 'no agregada';
    }
?>