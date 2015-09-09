// La variable watchID hace referencia la actual `watchAcceleration`
    var watchID = null;

    document.addEventListener("deviceready", onDeviceReady, false);

    // Esperar a que el dispositivo esté listo
    //
    function onDeviceReady() {
        startWatch();
    }

    // Comienza a visualizar la aceleración
    //
    function startWatch() {

        // Actualiza la aceleración cada segundo
        var options = { frequency: 1000 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    // Parar de ver la aceleración
    //
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Muestra una captura de la aceleración actual
    //
    function onSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Aceleración eje X: ' + acceleration.x         + ' m/s^2' + '<br />' +
                            'Aceleración eje Y: ' + acceleration.y         + ' m/s^2' + '<br />' +
                            'Aceleración eje Z: ' + acceleration.z         + ' m/s^2' + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + ' ms' + '<br />';
    }

    // onError: Fallo al obtener la aceleración
    //
    function onError() {
        alert('onError!');
    }