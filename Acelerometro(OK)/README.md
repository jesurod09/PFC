Acelerometro APP
================

Descripción:
------------
La aplicación muestra y actualiza cada 1 segundo la aceleración en cada uno de los 3 ejes de coordenadas x, y , z en unidades de m/s^2.
Adicionalmente cuenta con un botón que detiene la captura de datos del acelerómetro.

Objetivo:
---------
El objetivo de esta aplicación es obtener acceso al sensor denominado acelerómetro que incluyen la mayoría de los dispositivos móviles actuales.

Plugin utilizado:
-----------------
Se ha utilizado el plugin 'Accelerometer' (Device Motion 0.2.11) incluído en Intel XDK. Su información y documentación pueden encontrarse en esta web de donde también se ha obtenido el ejemplo para la aplicación:
- https://github.com/apache/cordova-plugin-device-motion

Compatibilidad:
---------------
El plugin utilizado es compatible para su uso con los siguientes SISTEMAS OPERATIVOS:

* Amazon Fire OS
* Android
* BlackBerry 10
* Browser
* Firefox OS
* iOS
* Tizen
* Windows Phone 8
* Windows

Por tanto la aplicación desarrollada debería funcionar en todos ellos. 

Pruebas:
--------
* La aplicación se ha probado sobre el emulador de Intel XDK con éxito.

* La aplicación ha sido probada con éxito en Android 4.4.2 con App Preview sobre los modelos de dispositivo:
	- BQ Aquaris 5HD -> Se ha observado que al detenerse en una posición fija el timestamp se detiene.
	- LG L50 Sporty
	
* La aplicación se ha probado con éxito sobre App Preview en iOS 9,  utilizando un terminal modelo iPhone 4s. No ha sido necesario realizar modificaciones de la aplicación.

* La aplicación ha sido probada con éxito en Android 4.4.2 instalada como aplicación nativa sobre los modelos de dispositivo:
	- BQ Aquaris 5HD -> Se ha observado que al detenerse en una posición fija el timestamp se detiene.
	- LG L50 Sporty