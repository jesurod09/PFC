 document.getElementById("id_btnHello").addEventListener("click", recordAudio);
 document.getElementById("id_btnPlay").addEventListener("click",  playAudio);
   // document.getElementById("id_btnPause").addEventListener("click", pauseAudio);
   // document.getElementById("id_btnStop").addEventListener("click",  stopAudio);
    
    
    function recordAudio() {
        alert("¿Quieres comenzar la grabación?");
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

    // Record audio
        mediaRec.startRecord();

    // Stop recording after 10 seconds
        setTimeout(function() {
          mediaRec.stopRecord();
            alert("Fin de la grabación");
        }, 10000); 
    }
    
    function playAudio() {

        // Play the audio file at url
        var url = "grabacionJRR.amr";
            //alert("La URL vale " + url);
        var my_media = new Media(url,
            // success callback
            function () { console.log("playAudio():Audio Success"); },
            // error callback
            function (err) { console.log("playAudio():Audio Error: " + err); }
        );

        my_media.play();
    }
    
 /*   function pauseAudio() {

        media.pause();
        //alert("pausado");

    }
        
    function stopAudio() {
        //alert("parado");
        media.stop();

    }*/