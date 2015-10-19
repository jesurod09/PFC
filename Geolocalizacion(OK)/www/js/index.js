 document.addEventListener("deviceready", onDeviceReady, false);
            function onDeviceReady() {
                console.log("navigator.geolocation works well");
                initialize(40.35, 3.67);
                navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true} );
                setInterval(function(){
                    navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true} );
                }, 15000);
                //navigator.geolocation.getCurrentPosition(onSuccess, onError, enableHighAccuracy: true );
            }
        
        
        
        var onSuccess = function(position) {
            
            console.log("Latitud es :" + position.coords.latitude);
            console.log("Longitud es :" + position.coords.longitude);
            initialize(position.coords.latitude , position.coords.longitude);
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
        }
        
        function initialize(lat, long) {
            var mapCanvas = document.getElementById('map-canvas');
            var mapOptions = {
                center: new google.maps.LatLng(lat, long),
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marcador = new google.maps.Marker({  
            position: new google.maps.LatLng(lat, long),
            map: map
        });
        }