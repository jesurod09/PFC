var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //tomaremos el muestreo de datos cada segundo (1000 ms)
        watchID = navigator.compass.watchHeading(onSuccess, onError, {frequency: 1000});


        function onSuccess(heading){
            //guardo los datos obtenidos del objeto CompassHeading
            var orientacion = 360-heading.magneticHeading;
            
            var element = document.getElementById('coordenadas');
            element.innerHTML = 'Orientación: ' + orientacion + ' grados';
            console.log("La brújula apunta a" + orientacion);
        }
        
        //funcion onError que tiene el objeto CompassError pasado como parámetro
        function onError(compassError) {
            //me limito a informar del error
            alert('Error: ' + compassError.code);
        }
    }
};