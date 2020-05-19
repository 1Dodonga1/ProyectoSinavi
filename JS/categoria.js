$(document).ready(function () {
  
  function inicio(){
  $.ajax({
    url: '../PHP/Categorias.php,
    type: 'GET',
     succes: function (response) {
       const categ = JSON.parse(response);
      let cargando= '';
      categ.array.forEach(categoria => {
        template += `
         <button></button><br>
         <label> curso</label>  
        `;
      });
    }
  });
  }
});