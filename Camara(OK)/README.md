Camara App
==========

Descripción de la aplicación:
-----------------------------
La aplicación incorpora un botón denominado "Tomar foto", que abre la cámara del dispositivo móvil, con la que tomaremos una foto . Cuando la guardemos, la foto se presentará en la aplicación.

Objetivo:
---------
El objetivo de esta aplicacion es la captura de imágenes haciendo uso de la cámara que incorporan  los dispositivos móviles actuales. Se pretende demostrar que es posible acceder a este hardware  mediante el uso de Intel XDK y el uso del plugin cordova adecuado.

Plugin utilizado:
-----------------
El plugin que se ha utilizado es el plugin "Camera" incluído en Intel XDK en su versión 1.2.0. Este plugin también podría haberse incluído en la aplicación como si de un plugin de terceros se tratase extrayendo la información (ID y repositorio) de esta URL:
    https://github.com/apache/cordova-plugin-camera

Este plugin provee una API para tomar fotos y recupera la foto de la galería de imágenes del dispositivo.
Para poder utilizar este plugin es importante comprobar que el dispositivo está listo para usarse usando la función onDeviceReady.
La imagen tomada se pasa a la función de callback "success" como un string codificado en base 64.

* La función camera.getPicture:
  _____________________________
  
  Esta función está disponible en las siguientes plataformas:
  - Amazon Fire OS
  - Android
  - BlackBerry 10
  - iOS
  - Tizen
  - Windows Phone 7 and 8
  - Windows 8
  
  La función abre la cámara por defecto del dispositivo. Una vez que se toma la foto la aplicación de la cámara se cierra y se restaura nuestra aplicación.
  
Pruebas realizadas:
-------------------
* La aplicación se ha probado sobre el emulador de Intel XDK, pero en éste la funcionalidad es limitada ya que se simula la captura de una imagen tomando la foto de un archivo incluido en el equipo de trabajo.

* La aplicación se ha probado con éxito en App Preview sobre Android 4.4.2 para los terminales:
  - BQ Aquaris 5HD.
  - LG L50 Sporty.

* La aplicación se ha probado con éxito sobre App Preview para iOS 9 utilizando un dispositivo iPhone 4s.

* La aplicación se ha probado con éxito empaquetándola e instalándola como aplicación nativa en  Android 4.4.2 sobre los terminales:
  - BQ Aquaris 5HD.
  - LG L50 Sporty.

Nota importante:
----------------
Para agilizar la ejecución de la app y compensar el delay que se produce desde que se pulsa el botón hasta que se abre la aplicación nativa de la cámara del dispositivo se ha utilizado la librería fastclick.