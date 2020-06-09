<?php 
  include ('../PHP/conexion.php');
  session_start();
  $id=$_POST['Idcategora'];
  $query ="select count(IdPreguntas) from preguntas where Categoria_IdCategoria=$id;";
  $result = mysqli_query($connection,$query);
   
  $row = mysqli_fetch_array($result);
  $numero=$row['count(IdPreguntas)'];
    echo $numero;
?>