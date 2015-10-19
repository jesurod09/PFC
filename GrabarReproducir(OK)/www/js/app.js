 document.getElementById("id_btnHello").addEventListener("click", recordAudio);
 document.getElementById("id_btnPlay").addEventListener("click",  playAudio);
 document.addEventListener("deviceready", onDeviceReady, false);
    

    function onDeviceReady() {
        console.log(Media);
    }     
    
    function recordAudio() {
        alert("¿Quieres comenzar la grabación?");
        //var src = "grabacionJRR.amr";
        var src;
        console.log(device.platform);
        if(device.platform == "Android"){
            src = "grabacionJRR.amr";
        }else if(device.platform == "iOS"){
            src = "grabacionJRR.wav";
        }
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

    // Parar de grabar después de 10 segundos
        setTimeout(function() {
          mediaRec.stopRecord();
            alert("Fin de la grabación");
        }, 10000); 
    }
    
    function playAudio() {

        // Reproducir el archivo de audio indicado en la url
        //var url = "grabacionJRR.amr";
        var url;
        if(device.platform == "Android"){
            url = "grabacionJRR.amr";
        }else if(device.platform == "iOS"){
            url = "grabacionJRR.wav";
        }

        var my_media = new Media(url,
            // success callback
            function () { console.log("playAudio():Audio Success"); },
            // error callback
            function (err) { console.log("playAudio():Audio Error: " + err); }
        );

        my_media.play();
    }
    
