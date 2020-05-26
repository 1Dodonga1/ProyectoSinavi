<?php

 include ('../PHP/conexion.php');
  session_start();
  $usua= $_POST['usuario'];
  $pass= $_POST['Password'];
  $_SESSION['usuario']=$usua;
  
  $query ="SELECT * FROM `profesor` WHERE Usuario='$usua' and Contraseña='$pass'";
  $result = mysqli_query($connection,$query);
  
  $row = mysqli_fetch_array($result);
  $_SESSION['name']=row['Nombre'];
  $_SESSION['idUsuario']=row['IdProfesor'];
  
  $boleano=mysqli_num_rows($result);
  if($boleano>0){
    header("Location: ../HTML/materias.html");
  }else{
    header("Location: ../HTML/login.html");
  }

?>