document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(Media);
}

// Grabar audio
    document.getElementById("id_btnHello").addEventListener("click", recordAudio);

    function recordAudio() {
        alert("Grabando...");
        var src = "grabacionJRR.amr";
        var mediaRec = new Media(src,
            // success callback
            function() {
              console.log("recordAudio():Audio Success");
            },

            // error callback
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
            }
        );

    // Grabar audio
        mediaRec.startRecord();

    // Para de grabar en 10 segundos
        setTimeout(function() {
          mediaRec.stopRecord();
            alert("Fin de la grabación");
        }, 10000); 
    }