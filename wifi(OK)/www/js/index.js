document.getElementById("botonA").addEventListener("click", botonA);
document.getElementById("botonB").addEventListener("click", botonB);
document.getElementById("botonC").addEventListener("click", botonC);
        
        //El cobjetivo de esta función  y las siguientes es comprobar el estado del wifi y activarlo o desactivarlo
        function botonA() {
            WifiWizard.isWifiEnabled(compruebaWifi, errorAlComprobar);
        }
        
        function compruebaWifi(estadoWifi){
            alert("entro en comprueba wifi y el estadoWifi = " + estadoWifi);
            
            if(estadoWifi == true){
                alert("Apagar wifi");
                WifiWizard.setWifiEnabled(false, exito, error);
            } else {
                alert("Encender Wifi");
                WifiWizard.setWifiEnabled(true, exito, error);
            }
        }
        
        function exito(){
            alert("Orden ejecutada");
        }

        function errorAlComprobar(){
            alert("Error al comprobar");
        }
        
        
        //Esta función lista las redes WIFI configuradas en el dispositivo y la pasa como parámetro al manejador listHandler
        function botonB() {
            WifiWizard.listNetworks(listHandler, error);
        }

        
        function listHandler(list){
            var i;

                for (i=0; i<list.length; i++) 
                {
                document.getElementById('lista').innerHTML += "<li>" + list[i] + "</li>";
                }
        }

        //Las siguientes funciones se encargan del escaneo de redes WIFI disponibles
        function botonC() {
            alert("Hola");
            WifiWizard.startScan(escanea, error);
        }
        
        /*function escanea(){
            WifiWizard.getScanResults([], listaEscaneada, error);
        }*/
        
        function escanea() {
            alert("Escaneando con éxito");
            WifiWizard.getScanResults(true, listaEscaneada, error);
        }
        function listaEscaneada(list){
            alert("Entro en lista escaneada");
            alert("La lista vale " + list);
            var i;

            
            for (i=0; i<list.length; i++) 
            {
                //alert(list[i].SSID);

                document.getElementById('listaEscaneada').innerHTML += "<li>" + list[i].SSID + "</li>";
            }   
        }
        

        //Función auxiliar de error
        function error(){
            alert("No se puede ejecutar la orden");
        }
