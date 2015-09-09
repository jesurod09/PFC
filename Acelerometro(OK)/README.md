Acelerómetro APP
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
Se ha utilizado el plugin 'Accelerometer' incluído en Intel XDK. Su información y documentación pueden encontrarse en esta web de d onde también se ha obtenido el ejemplo para la aplicación:
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

Por tanto la aplicación desarrollada debería funcionar en todos ellos. Según la descripción del plugin existen peculiaridades en el caso de iOS que probablemente requieran la modifcación de la alicación para realizar las pruebas en dicho Sistema operativo.

Pruebas:
--------
La aplicación ha sido probada con éxito en Android 4.4.2 (modelo de dispositivo BQ Aquaris 5HD)