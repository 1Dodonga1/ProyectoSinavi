<?php
   session_start();
   $_SESSION['idExamen']=$_POST['id'];

   echo $_SESSION['idExamen'];
?>