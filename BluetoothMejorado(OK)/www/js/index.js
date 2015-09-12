        var bluetoothActivado; // su valor es true si está activado, false en caso contrario
        document.getElementById("bt").addEventListener("click", botonA);
        document.getElementById("scan").addEventListener("click", botonB);
        inicializaDisplay();

        function botonA(){
            //alert("voy a comprobar la conexión");
            compruebaConexionBluetooth();
        }
        
        function compruebaConexionBluetooth(){
            //alert("comprobando conexión...");
            bluetoothSerial.isEnabled(
                function() {
                    //alert("se va a apagar el bluetooth, estaba encendido");
                    console.log("Bluetooth is enabled");
                    document.getElementById("estado").innerHTML = "Bluetooth apagado";
                    bluetoothActivado = true;
                    activaBluetooth();
                },
                function() {
                    //alert("se va a encender el bluetooth, estaba apagado");
                    console.log("Bluetooth is *not* enabled");
                    document.getElementById("estado").innerHTML = "Bluetooth encendido";
                    bluetoothActivado = false;
                    activaBluetooth();
                }
            );  
        }
        
        function activaBluetooth(){
            if (bluetoothActivado == false) {
                //alert("intentando activar bluetooth");
                bluetoothSerial.enable(
                    function() {
                        console.log("Bluetooth is enabled");
                        bluetoothActivado = true;
                        alert("activado");
                    },
                    function() {
                        console.log("The user did *not* enable Bluetooth");
                        alert("error");
                    }
                );
            } else if (bluetoothActivado == true) {
                alert("El bluetooth ya está activado quizás quieres desactivarlo desde el menú de ajustes de tu teléfono");
                bluetoothSerial.showBluetoothSettings(); //no disponible en iOS
                

            } else {
                alert ("El comportamiento de la APP no es el esperado");
            }
        }
        
        function inicializaDisplay(){
            document.getElementById("estado").innerHTML = "¿?";

        }

        function botonB() {
            alert("hola");
            bluetoothSerial.discoverUnpaired(function(devices) {

                devices.forEach(function(device) {
                    console.log(device.id);
                    alert(device.id);
                    document.getElementById("escaner").innerHTML += "<li>" + device.name + "</li>";
            })
            }, 
            function(){alert("Error")});
        }
    