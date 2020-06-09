let imagenes = ['../imagenes/img1.png','../imagenes/img2.png','../imagenes/img3.jpg'];
let texto = [' Sinavi la mejor opcion para ti amigo maestro... Pruebalo ya!','Si ves esto es que la imagen no cargo :,C','Organiza tus materias, crea tus examnes, Agregale preguntas tu propio banco de preguntas!']
let contador = 0;

function carrousel(direccion){
    let direccion1 = direccion;

    if(direccion1=='atras'){
        if(contador==0){
            document.getElementById('imagen').src= imagenes[imagenes.length-1];
            document.getElementById('textoCarrusel').innerHTML = texto[texto.length-1];
            contador++;
        }else if (contador<imagenes.length-1) {
            document.getElementById('imagen').src= imagenes[imagenes.length-1-contador];
            document.getElementById('textoCarrusel').innerHTML = texto[texto.length-1-contador];
            contador++;

        }else {
            document.getElementById('imagen').src= imagenes[0];
            document.getElementById('textoCarrusel').innerHTML = texto[0];
            contador=0;
        }
    }

    if(direccion1=='adelante'){
        if(contador==0){
            document.getElementById('imagen').src= imagenes[0];
            document.getElementById('textoCarrusel').innerHTML = texto[0];
            contador++;
        }else if (contador<imagenes.length-1) {
            document.getElementById('imagen').src= imagenes[contador];
            document.getElementById('textoCarrusel').innerHTML = texto[contador];
            contador++;

        }else {
            document.getElementById('imagen').src= imagenes[imagenes.length-1];
            document.getElementById('textoCarrusel').innerHTML = texto[texto.length-1];
            contador=0;
        }
    }

}