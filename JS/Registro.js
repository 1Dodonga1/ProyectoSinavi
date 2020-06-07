
window.onload = function(){
    
    var mb = document.getElementById('Registro');
    mb.addEventListener('click', handler);

    var mb2 = document.querySelector('.cerrar');
    mb2.addEventListener('click', handler2);

    var mb3 = document.getElementById('Inicio');
    mb3.addEventListener('click', handler3);
    
    var mb4 = document.querySelector('.cerrar2');
    mb4.addEventListener('click', handler4);


}

function handler(){
    document.querySelector('.modelo-global').style.display = "flex";   
}

function handler2(){
    document.querySelector('.modelo-global').style.display = "none";
}
function handler3(){
    document.querySelector('.modelo-global2').style.display = "flex";

}
function handler4(){
     document.querySelector('.modelo-global2').style.display = "none";
    
}
