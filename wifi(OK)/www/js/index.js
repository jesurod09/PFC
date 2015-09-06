document.addEventListener("deviceready", onDeviceReady, false);
document.getElementById("botonA").addEventListener("click", botonA);
document.getElementById("botonB").addEventListener("click", botonB);
document.getElementById("botonC").addEventListener("click", botonC);


    
// Cuando el dispositivo esté listo , devuelve el SSID de la red a la que está conectado
function onDeviceReady() {
    miConexionWifi();
}

//Comprueba a qué red WIFI me encuentro conectado
function miConexionWifi(){
    WifiWizard.getCurrentSSID(ssidHandler, wifiApagado);
}
    
    function ssidHandler(ssid){
        document.getElementById("miConexion").innerHTML = "Conectado a: " + ssid;
    }
    
    function wifiApagado(){
        alert("El WiFi se encuentra apagado o no hay ninguna red configurada.");
        document.getElementById("miConexion").innerHTML = "WIFI APAGADO o NO HAY RED CONFIGUURADA";
    }
        
//El cobjetivo de esta función  y las siguientes es comprobar el estado del wifi y activarlo o desactivarlo
function botonA() {
    WifiWizard.isWifiEnabled(compruebaWifi, errorAlComprobar);
}
    //Manejador que comprueba el estado del WIFI y lo habilita o deshabilita   
    function compruebaWifi(estadoWifi){
        //alert("entro en comprueba wifi y el estadoWifi = " + estadoWifi);
            
        if(estadoWifi == true){
            alert("Apagar wifi");
            WifiWizard.setWifiEnabled(false, exito, error);
        } else {
            alert("Encender Wifi");
            WifiWizard.setWifiEnabled(true, exito, error);
        }
    }
        //Función auxiliar que después de comprobar si el wifi está ON/OFF establece la red a la que está conectado
        function exito(){
            alert("Orden ejecutada");
            miConexionWifi();
        }
    //Manejador que se ejecuta en caso de error al ejecutar la función isWifiEnabled
    function errorAlComprobar(){
        alert("Error al comprobar. Puede que su conexión WIFI esté deshabilitada.");
    }
        
        
//Esta función lista las redes WIFI configuradas en el dispositivo y la pasa como parámetro al manejador listHandler
function botonB() {
    WifiWizard.listNetworks(listHandler, error);
}       
    function listHandler(list){
        var i;
        for (i=0; i<list.length; i++) {
            document.getElementById('lista').innerHTML += "<li>" + list[i] + "</li>";
        }
    }

//Las siguientes funciones se encargan del escaneo de redes WIFI disponibles
function botonC() {
    alert("Hola");
    WifiWizard.startScan(escanea, error);
}

    function escanea() {
        alert("Escaneando con éxito");
        WifiWizard.getScanResults(true, listaEscaneada, error);
    }
    function listaEscaneada(list){
        alert("Entro en lista escaneada");
        alert("La lista vale " + list);
        var i;
            
        for (i=0; i<list.length; i++) {
                document.getElementById('listaEscaneada').innerHTML += "<li>" + list[i].SSID + "</li>";
        }   
    }
        

//Función auxiliar de error
function error(){
    alert("No se puede ejecutar la orden");
}
