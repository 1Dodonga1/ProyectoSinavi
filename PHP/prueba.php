<?php
 require_once('../PHP/DatosMateria.php');
  $obj = new DatosMateria(); 
  $obj-> setCodigo("hola ");
      $hola=$obj-> getCodigo();

 echo $hola;
?>