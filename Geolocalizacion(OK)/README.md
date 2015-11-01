Geolocalización APP
===================


Descripción:
------------
La aplicación muestra por defecto inicialmente un punto localizado en un lugar fijo situado en medio del mar. Una vez que obtiene la ubicación, se carga en el mapa el lugar en el que se encuentra el dispositivo móvil.

Objetivo:
---------
El objetivo es acceder a la ubicación en la que se encuentra situado el dispositivo móvil. Para ello el plugin instalado hace uso del GPS, la dirección MAC de la red WIFI, la dirección IP o el identificador de la celda GSM/CDMA en la que se encuentra ubicado el teléfono.

Plugin:
-------
El plugin utilizado es el plugin Geolocation en su versión 0.3.11 incluído por defecto en Intel XDK. Puede encontrarse su documentación y su repositorio en la siguiente url:
    - https://github.com/apache/cordova-plugin-geolocation

El plugin es válido en las siguientes plataformas:
    * Amazon Fire OS
    * Android
    * BlackBerry 10
    * Firefox OS
    * iOS
    * Tizen
    * Windows Phone 7 and 8
    * Windows 8
    * Windows
    
Pruebas realizadas:
-------------------
* La ejecución de la aplicación ha sido exitosa en el emulador de Intel XDK aunque el mapa no se centra en la posición del marcador.

* La aplicación ha sido probada con éxito como aplicación nativa en los dispositivos reales Android 4.4.2 , modelos de dispositivo:
    - BQ Aquaris 5 HD.
    - LG L50 Sporty
    
* También se ha probado con éxito en  los dispositivos reales con Android 4.4.2 anteriores y en uno con iOS 9(iPhone 4s) utilizando la aplicación App Preview para los modelos:
    - BQ Aquaris 5 HD. ->Tarda en encontrar la posición.
    - LG L50 Sporty
    - iPhone 4s

En el caso de las pruebas realizadas sobre los dispositivos Android, bien haya sido instalando la aplicación como aplicación nativa o sobre App Preview, se ha observado que el dispositivo LG ha encontrado su ubicación más rápido que el BQ.  

#Precauciones:
En el caso de Android hay que activar el modo de alta precisión (enableHighAccuracy) para que la aplicación devuelva la posición del usuario. Este modo de funcionamiento se sirve del GPS para encontrar la posición.

