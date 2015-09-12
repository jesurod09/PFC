    document.addEventListener("deviceready", onDeviceReady, false);

    // Esperar a que el dispositivo esté listo
    //
    function onDeviceReady() {
        window.addEventListener('load', function() {
            new FastClick(document.body);
        }, false);
        app.initialize();
    }    

    var app = {

          initialize: function() {
              this.bindEvents();
          },
         
          bindEvents: function() {
              var takePhoto = document.getElementById('takePhoto');
              takePhoto.addEventListener('click', app.takePhoto, false);
          },

          takePhoto: function(){
              navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20, 
                  allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });
          },

          onPhotoDataSuccess: function(imageData) {
         
            var photo = document.getElementById('photo');

            photo.style.display = 'block';

            photo.src = "data:image/jpeg;base64," + imageData;

          },

          onFail: function(message) {
            alert('Failed because: ' + message);
          }

      };