<?php

$connection = mysqli_connect(
  'localhost', 'root', 'morado', 'sinav'
);

// for testing connection
if($connection) {
  echo 'database is connected';
}

?>