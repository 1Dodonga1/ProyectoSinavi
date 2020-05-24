
window.onload = function(){
    var mb = document.getElementById('Registro');
    mb.addEventListener('click', handler);

    var mb2 = document.querySelector('.cerrar');
    mb2.addEventListener('click', handler2);

}
function handler(){
    document.querySelector('.modelo-global').style.display = "flex";   
}

function handler2(){
    document.querySelector('.modelo-global').style.display = "none";
}

