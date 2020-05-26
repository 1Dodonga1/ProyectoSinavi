<?php

 include ('../PHP/conexion.php');
  session_start();
  $usua= $_POST['usuario'];
  $pass= $_POST['Password'];
  $_SESSION['usuario']=$usua;
  
  $query ="SELECT * from `profesor` WHERE Usuario='j' and Contraseña='j'";
  $result = mysqli_query($connection,$query);
  
  
  $boleano=mysqli_num_rows($result);
  

  if($boleano>0){
    header("Location: ../HTML/materias.html");
  }else{
    header("Location: ../HTML/login.html");

  }

?>