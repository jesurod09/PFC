Vibración APP
=============

Descripción:
------------
La aplicación consta de 5 botones:
* Vibración Larga: Hace que en el teléfono se ejecute un viibración de larga duración
* Vibración Corta: Se establece una breve vibración para el teléfono
* Patrón: Ejecuta varios patrones de vibración.
* Start/Stop: Ejecuta una vibración indefinidamente hasta que es pulsado de nuevo.
* Detener vibración: Detiene cualquiera de las acciones ejecutadas por los cuatro botones anteriores haciendo que el teléfono deje de vibrar.

Objetivo:
---------
El objetivo es acceder al hardware que permite la vibración en los teléfonos móviles, haciendo vibrar el teléfono con distintos patrones, ante un evento que en este caso se ha simulado como la pulsación de un botón.

Plugin utilizado:
-----------------
Intel XDK contiene una casilla en Included Plugins que permite añadir este plugin (Vibration 0.3.12). 
Esta aplicación se utilizó para comprobar como se añadían plugins de terceros en Intel XDK, por lo que el plugin se ha cargó inicialmente, usando los datos proporcionados (ID y repositorio) en esta URL:

* http://plugins.cordova.io/#/package/org.apache.cordova.vibration

Aunque para asegurar su uso en Android finalmente se incorporó al proyecto marcando la casilla correspondiente en Intel XDK.

Dispositivos compatibles:
-------------------------
Según el autor del plugin éste es compatible para su uso con las siguientes plataformas:
* firefox OS
* wp7
* wp8
* android
* amazon-fireos
* ubuntu
* ios
* blackberry10  
* tizen

El plugin tiene ciertas peculiaridades dependiendo del sistema operativo al que esté destinado la aplicación. En iOS no es posible fijar el tiempo de vibración del dispositivo ni establecer un patrón de vibración.

Pruebas:
--------
* La aplicación se ha probado sobre el emulador de Intel XDK. En este emulador pueden apreciarse correctamente la vibración corta y la vibración larga pero no se aprecia correctamente el patrón de vibración y la opción "Star/Stop" bloquea intel XDK.

* El código de esta aplicación se ha probado con éxito sobre App Preview en Android 4.4.2 e iOS 9. Modelos de terminal: 
    - BQ Aquaris 5 HD
    - LG L50 Sporty
    - iPhone 4s -> No se pueden aplicar patrones de vibración ni establecer el tiempo de vibración

* La aplicación se ha probado con éxito empaquetándola e instalándola como aplicación nativa en Android 4.4.2 sobre los terminales:
    - BQ Aquaris 5 HD
    - LG L50 Sporty

 En Android existe la limitación de que como máximo el teléfono podrá vibrar 15 segundos seguidos