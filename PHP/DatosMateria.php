<?php
  /**
   * Clase para guardar las variables 
   */

class DatosMateria{
   static $idMateria;
   static $NombreMateria;
   static $Codigo;

 //seters
   public function setidMateria($idMateria){
     $this->_idMateria=$idMateria;
   }
   public function setNombreMateria($NombreMateria){
     $this->_NombreMateria=$NombreMateria;
   }
   public function setCodigo($Codigo){
     $this->_Codigo=$Codigo;
   }
   
 //geeters
  public function getidMateria(){
     return  $this->_idMateria;
  }
   public function getNombreMateria(){
     return  $this->_NombreMateria;
   }
   public function getCodigo(){
     return  $this -> _Codigo;
   }
}
?>