
window.onload = function(){
    var mb = document.getElementById('Registro');
    mb.addEventListener('click', handler);

    var mb2 = document.querySelector('.cerrar');
    mb2.addEventListener('click', handler2);

    var mb3 = document.getElementById('Inicio');
    mb3.addEventListener('click', handler3);
    

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
