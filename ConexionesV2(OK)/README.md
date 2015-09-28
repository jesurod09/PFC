Conexiones APP:
===============

Descripción de la aplicación:
-----------------------------
La aplicación muestra el tipo de conexión que mantiene el teléfono en ese momento. Esta conexión puede ser de los siguientes tipos:

* UNKNOWN
* ETHERNET
* WIFI
* CELL_2G
* CELL_3G
* CELL_4G
* CELL
* NONE

Además la aplicación es capaz de reconocer si el dispositivo está conectado a internet o si por el contrario no la hay. En ambos casos cuando se produce un cambio la aplicación lanza una alerta.

Objetivo:
---------
El objetivo de esta aplicación es obtener información con el estado de la conexión del teléfono, y el tipo de conexión.

Plugin Utilizado:
-----------------
Se ha utilizado el plugin Connection incluído en Intel XDK, aunque también puede encontrarse en este repositorio de donde además se ha extraído el ejemplo:
    - https://github.com/apache/cordova-plugin-network-information/blob/master/README.md

Compatibilidad:
---------------
El plugin es compatible en los siguientes Sistemas Operativos:

* Amazon Fire OS
* Android
* BlackBerry 10
* Browser
* iOS
* Windows Phone 7 and 8
* Tizen
* Windows
* Firefox OS

En el caso de iOS y Windows Phone no se puede obtener la información sobre el tipo de red a la que está conectada el dispositivo y la conexión aparece por defecto siempre como CELL. En iOS el evento "online" tardará al menos un segundo en dispararse, antes de lo cual el tipo de conexión es UNKNOWN. También en iOS el evento "offline" tardará al menos un segundo en dispararse si procede cuando arranque la aplicación.

Pruebas:
-------
La aplicación se ha probado con éxito en Android 4.4.2 (Modelo de dispositivo bq Aquaris 5HD).
