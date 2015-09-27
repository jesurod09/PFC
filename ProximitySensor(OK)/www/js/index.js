        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log("El dispositivo está listo para ser usado");
            navigator.proximity.enableSensor();            
            console.log("Se ha habilitado el sensor de proximidad");
        }
        
        function onSuccess(state) {
            //alert('Proximity state: ' + (state ? 'near' : 'far'));
            document.getElementById("estado").innerHTML = 'Proximity state: ' + (state ? 'cerca' : 'lejos');
        };



        setInterval(function(){
            navigator.proximity.getProximityState(onSuccess);
        }, 100);