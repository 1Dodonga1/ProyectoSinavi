<?php
 include ('../PHP/conexion.php');
  session_start();
  $usua= $_GET['usuario'];
  $pass= $_GET['Password'];
  $_SESSION['usuario']=$usua;
  
  $query ="SELECT * from `profesor` WHERE Usuario='$usua' and Contraseña='$pass'";
  $result = mysqli_query($connection,$query);
  $row = mysqli_fetch_array($result);
      $_SESSION['idUsuario']=$row['IdProfesor'];
      $_SESSION['nombre']=$row['Nombre'];
  $boleano=mysqli_num_rows($result);
  

  if($boleano>0){
    header("Location: ../HTML/materias.html");
    //echo  $_SESSION['nombre'];
  }else{
//header("Location: ../HTML/login.html");
   echo $result;
  }

?>