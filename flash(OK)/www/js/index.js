        document.getElementById("botonON").addEventListener("click", on);
        document.getElementById("botonOFF").addEventListener("click", off);
        
        function on() {
            window.plugins.flashlight.switchOn(); 

        }
        
        function off(){
            window.plugins.flashlight.switchOff();
        }
        
        document.addEventListener("backbutton", function() {
            // pass exitApp as callbacks to the switchOff method
            window.plugins.flashlight.switchOff(exitApp, exitApp);
        }, false);


        function exitApp() {
            navigator.app.exitApp();
        }