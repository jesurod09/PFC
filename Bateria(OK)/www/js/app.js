var statusdiv;

function init() {
console.log("se ejecuta init");
document.addEventListener("deviceready", onDeviceReady, true);
statusdiv = document.getElementById("status");
}
var onDeviceReady = function() {
//Listeners para los eventos de la batería
console.log("se jecuta onDeviceReady");
window.addEventListener("batterycritical", battCrit, false);
window.addEventListener("batterylow", battLow, false);
window.addEventListener("batterystatus", battStat, false);
};

var battCrit = function(info) {
//navigator.notification.alert("El nivel de tu batería es muy bajo");
alert("El nivel de tu batería es muy crítico");
drawStatus(info);
};

var battLow = function(info) {
//navigator.notification.alert("Tu batería se está agotando");
alert("Tu batería se está agotando");
drawStatus(info);
};

var battStat = function(info) {
drawStatus(info);
};

var drawStatus = function(info){
var s = "<p><b>Estado de la batería</b><br/>";
s += "El nivel es del "+info.level + " %" + "<br/>";
s += "Está enchufado: "+info.isPlugged;
s += "</p>";
statusdiv.innerHTML = s;
};