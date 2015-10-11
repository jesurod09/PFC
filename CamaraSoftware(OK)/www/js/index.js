

    var pictureSource;   // fuente de la foto
    var destinationType; // establece el formato del valor devuelto
    var objetoConfiguracion; 


    // Esperar a que Cordova conecte con el dispositivo
    //
    document.addEventListener("deviceready",onDeviceReady,false);
    // Cordova está listo para ser usado
    //
    function onDeviceReady() {
        console.log(navigator.camera);
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        encodingType=navigator.camera.EncodingType;
        direccion=navigator.camera.Direction;
    }

    // Se llama  cuando la foto se recupera con éxito
    //
    function onPhotoDataSuccess(imageData) {
      // Obtener el manejador de la imagen
      //
      var smallImage = document.getElementById('smallImage');
      // Unhide image elements
      //
      smallImage.style.display = 'block';
      // Muestra la foto capturada
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    // Se llama  cuando la foto se recupera con éxito
    //
    function onPhotoURISuccess(imageURI) {
      // Obtener el manejador de la imagen
      //
      var largeImage = document.getElementById('largeImage');
      // Unhide image elements
      //
      largeImage.style.display = 'block';
      // Muestra la foto capturada
      //
      largeImage.src = imageURI;
    }
    // Esta función es llamada por un botón
    //
    function capturePhoto() {
      // Toma una foto usando la cámara del dispositivo y recupera la imagen como un base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }
    // Esta función es llamada por un botón
    //
    function capturePhotoEdit() {
      // Toma una foto con la cámara del dispositivo, permite editarla, and recupera la imagen como un base64-encoded string  
        objetoConfiguracion= { 
            quality: Number(document.getElementById('calidad').value), 
            destinationType: destinationType.DATA_URL,
            allowEdit: true,
            encodingType: Number(document.getElementById('codificacion').value) ,
            targetWidth: Number(document.getElementById('ancho').value), 
            targetHeight: Number(document.getElementById('alto').value),
            cameraDirection: Number(document.getElementById('camara').value) 
        }
        
        

      console.log(objetoConfiguracion);
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, 
        objetoConfiguracion
        );
    }
    // Esta función es llamada por un botón
    //
    function getPhoto(source) {
      // Recuperar imagen ubicada en el archivo de origen especificado
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }
    // Esta función se llama cuando algo va mal
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }