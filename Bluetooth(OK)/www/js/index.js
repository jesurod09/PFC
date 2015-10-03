        var bluetoothActivado; // su valor es true si está activado, false en caso contrario


        // Esperar a que el dispositivo esté listo
        //
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log("Listo para funcionar");;
        }
        
        // Listeners para los botones "ON/OFF" y "Escanea dispositivos"
        document.getElementById("bt").addEventListener("click", bluetoothONOFF);
        document.getElementById("scan").addEventListener("click", bluetoothEscaner);

        // Determinar el estado del Bluetooth y lo actualiza al estado correcto cada 100 ms si otras funciones ponen un estado erróneo.
        setInterval(function(){
            actualizaDisplay();
        }, 5000);
        
        // Función que se dispara al intentar encender o  apagar el bluetooth
        function bluetoothONOFF(){
            //alert("voy a comprobar la conexión");
            compruebaConexionBluetooth();
        }

        function bluetoothEscaner() {
            alert("Escaneando...");
            bluetoothSerial.discoverUnpaired(function(devices) {
                
                devices.forEach(function(device) {
                    console.log(device.id);
                    alert(device.id);
                    document.getElementById("escaner").innerHTML += "<li>" + device.name + " -> MAC: " + device.id + "</li>";
            })
            }, 
            function(){alert("Error")});
        }
        

        // Función que comprueba el estado del bluetooth y en función de él lo activa o desactiva
        function compruebaConexionBluetooth(){
            //alert("comprobando conexión...");
            bluetoothSerial.isEnabled(
                function() {
                    //alert("se va a apagar el bluetooth, estaba encendido");
                    console.log("Bluetooth is enabled");
                    document.getElementById("estado").innerHTML = "Bluetooth apagado";
                    //bluetoothActivado = true;
                    activaBluetooth();
                },
                function() {
                    //alert("se va a encender el bluetooth, estaba apagado");
                    console.log("Bluetooth is *not* enabled");
                    document.getElementById("estado").innerHTML = "Bluetooth encendido";
                    //bluetoothActivado = false;
                    activaBluetooth();
                }
            );  
        }
        
        // Función para activar/desactivar bluetooth
        function activaBluetooth(){
            if (bluetoothActivado == false) {
                //alert("intentando activar bluetooth");
                bluetoothSerial.enable(
                    function() {
                        console.log("Bluetooth is enabled");
                        //bluetoothActivado = true;
                        alert("Activado");
                    },
                    function() {
                        console.log("The user did *not* enable Bluetooth");
                        alert("Error");
                    }
                );
            } else if (bluetoothActivado == true) {
                alert("El bluetooth ya está activado quizás quieres desactivarlo desde el menú de ajustes de tu teléfono");
                bluetoothSerial.showBluetoothSettings(); //no disponible en iOS
                

            } else {
                alert ("El comportamiento de la APP no es el esperado");
            }
        }
        
        // Función para actualizar el estado del bluetooth
        function actualizaDisplay(){
            document.getElementById("estado").innerHTML = "¿?";
            bluetoothSerial.isEnabled(
                function() {
                    document.getElementById("estado").innerHTML = "Bluetooth encendido";
                    bluetoothActivado = true;
                },
                function() {
                    document.getElementById("estado").innerHTML = "Bluetooth apagado";
                    bluetoothActivado = false;
                }
            ); 
            

        }



        // Función para emparejar el dispositivo con otro dispositivo 
        function empareja(){
            alert(document.getElementById("DIREC_MAC").value);
            bluetoothSerial.connect(document.getElementById("DIREC_MAC").value, 
                function(){alert("Emparejado");}, 
                function(error){alert("Error:" + error + "No se puede emparejar");}
            );
        }
    
