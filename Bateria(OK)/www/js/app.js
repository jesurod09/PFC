var statusdiv;

function init() {
document.addEventListener("deviceready", onDeviceReady, true);
statusdiv = document.getElementById("status");
}
var onDeviceReady = function() {
//Listeners para los eventos de la batería
window.addEventListener("batterycritical", battCrit, false);
window.addEventListener("batterylow", battLow, false);
window.addEventListener("batterystatus", battStat, false);
};

var battCrit = function(info) {
navigator.notification.alert("El nivel de tu batería es muy bajo");
drawStatus(info);
};

var battLow = function(info) {
navigator.notification.alert("Tu batería se está agotando");
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