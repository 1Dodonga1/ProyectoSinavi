<?php
 include ('../PHP/conexion.php');
  
  $nombre= $_POST['nom'];
  $usuarioRegistro= $_POST['usua'];
  $pass= $_POST['pass'];
  $tipo= $_POST['Tipo'];
 

 switch($tipo){
   case 'Profesor':
      $query ="INSERT INTO profesor (Nombre, Usuario, Contraseña) VALUES ('$nombre', '$usuarioRegistro', '$pass');";
      $result = mysqli_query($connection,$query);
      if($result===TRUE){
        //header("Location: ../HTML/login.html");
        echo 'usuario profe agregado';
      }else{
        echo 'no pudo crearse usuario ya registrado';
      }
   break;
     
   case 'Alumno':
      $query ="INSERT INTO alumnos (Nombre, Usuario, Contraseña) VALUES ('$nombre', '$usuarioRegistro', '$pass');";
      $result = mysqli_query($connection,$query);
      if($result===TRUE){
        //header("Location: ../HTML/login.html");
        echo 'usuario alumno agregado';
      }else{
        echo 'no pudo crearse usuario ya registrado';
      }
   break;

   default:
     echo 'opcion invalida';      
   break;
 }
?>