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
Intel XDK contiene una casilla en Included Plugins que permite añadir este plugin. No obstante como esta aplicación también se utilizó para comprobar como se añadía plugins de terceros en Intel XDK, el plugin se ha cargado como tal, usando los datos proporcionados (ID y repositorio) en esta URL:
	- http://plugins.cordova.io/#/package/org.apache.cordova.vibration

Dispositivos compatibles:
-------------------------
Según el autor del plugin éste es compatible para su uso con las siguientes plataformas:
* firefoxos
* wp7
* wp8
* android
* amazon-fireos
* ubuntu
* ios
* blackberry10  
* tizen

El plugin tiene ciertas peculiaridades dependiendo del sistema operativo al ue esté destinado la aplicación. El actual código es válido para Android pero puede que sea necesario adaptarlo a las peculiaridades si se prueba en otro sistema operativo.

Pruebas:
--------
El código de esta aplicación se ha probado con éxito en Android 4.4.2 (Modelo del terminal BQ Aquaris 5 HD)