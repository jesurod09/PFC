
var vibrar = false;
    
document.getElementById("botonA").addEventListener("click", botonA);
document.getElementById("botonB").addEventListener("click", botonB);
document.getElementById("botonC").addEventListener("click", patron);
document.getElementById("botonD").addEventListener("click", startStop);
document.getElementById("cancela").addEventListener("click", detener);
    
function botonA() {
    console.log("pulsado Vibración Larga");
    navigator.vibrate(3000);
}

function botonB() {
    console.log("pulsado Vibración Corta");
    navigator.vibrate(1000); 
}

function patron() {
    console.log("pulsado Patrón");
    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
}

function startStop(){
    console.log("pulsado start/stop");
    if (vibrar == false) {
        vibrar = true;
        navigator.vibrate(1000*3600*24);
    } else {
        detener();

    }
}
    
function detener() {
    console.log("pulsado detener");
    vibrar = false;
    navigator.notification.cancelVibration();
}