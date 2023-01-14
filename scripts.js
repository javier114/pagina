
// focus, change y blur

var input = document.getElementById("input-search");
const log = document.getElementById('log');

input.addEventListener("focus", myFocusFunction, true);
input.addEventListener('change', myChangeFunction, true);
input.addEventListener("blur", myBlurFunction, true);


// INTERACTUANDO CON EL OBJETO INPUT
function myFocusFunction() {
    document.getElementById("input-search").style.backgroundColor = "yellow";
}

// LO QUE SUCEDIO AL INTERACTUAR CON EL INPUT
function myChangeFunction(event) {
    log.textContent = event.target.value;
}

// DESPUÉS DE INTERACTUAR CON EL INPUT
function myBlurFunction() {
    document.getElementById("input-search").style.backgroundColor = "aqua";
}



// Para cambiar las imagenes

function cambiarImagen1() {
    document.getElementById("img-1").src="imagenes/Imagen1.png";
}

function cambiarImagen2() {
    document.getElementById("img-2").src="imagenes/Imagen1.png";
}

function cambiarImagen3() {
    document.getElementById("img-3").src="imagenes/Imagen1.png";
}
