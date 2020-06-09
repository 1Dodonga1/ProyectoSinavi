<?php
   session_start();
   $_SESSION['idExamen']=$_POST['id'];
   $_SESSION['nomExamen']=$_POST['nombre'];
   echo $_SESSION['nomExamen'];
?>