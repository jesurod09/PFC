Bateria App
===========

Descripción:
------------

La aplicación muestra por pantalla el nivel de la batería y si el dispositivo está enchufado o no. Adicionalmente si la batería se encuentra baja o en estado crítico avisa con un mensaje de alerta.

Objetivo:
---------
El objetivo principal de la aplicación es acceder a información importante de una pieza fundamental de Hardware de los teléfonos como es la batería. Utilizando el plugin Battery 0.2.12 se puede obtener la información que se ha mencionado en la descripción. 

Plugin utilizado:
-----------------
El plugin utilizado puede encontrarse en la siguiente URL:

* https://github.com/apache/cordova-plugin-battery-status

Compatibilidad:
---------------
* La función batterystatus es compatible en:
    - Amazon Fire OS
    - iOS
    - Android
    - BlackBerry 10
    - Windows Phone 7 and 8
    - Windows (Windows Phone 8.1 only)
    - Tizen
    - Firefox OS
    - Browser
    
* La función batterycritical es compatible en:
    Amazon Fire OS
    - iOS
    - Android
    - BlackBerry 10
    - Tizen
    - Firefox OS
    - Windows (Windows Phone 8.1 only)
    
    
* La función batterylow es compatible en:
    - Amazon Fire OS
    - iOS
    - Android
    - BlackBerry 10
    - Tizen
    - Firefox OS
    - Windows (Windows Phone 8.1 only)
    - Browser
    
Pruebas:
--------
* Se ha probado con éxito la aplicación sobre el emulador de Intel XDK, donde además es muy sencillo simular los distintos niveles de batería.

* La aplicación se ha probado con App Preview en Android 4.4.2 para los terminales:
    - BQ Aquaris 5HD
    - LG L50 Sporty

* Se ha probado la aplicación sobre App Preview en iOS 9 sobre un terminal iPhone 4s. A pesar de incluir un plugin que es posible probar con App Preview, la aplicación no devuelve información sobre el estado de la batería. No se ha encontrado motivo aparente ya que no existen restricciones en iOS que apliquen al plugin con el que se ha desarrollado la aplicación y en principio se trata de un plugin compatible con App Preview ya que viene incluido en Intel XDK.

* La aplicación se ha probado con éxito en Android 4.4.2 empaquetada e instalada como aplicación nativa para los terminales:
    - BQ Aquaris 5HD
    - LG L50 Sporty
