Bluetooth App
=============

Descripción:
------------
La siguiente aplicación consta de un botón "ON/OFF" que enciende el bluetooth del dispositivo. Si lo que se desea es desactivarlo podemos hacer click sobre el mismo botón lo que abrirá las opciones de configuración del bluetooth desde donde se puede desactivar,
La aplicación además muestra el estado del bluetooth e indica si está encendido o apagado y también escanea y lista los dispositivos que hay disponibles mostrando su nombre y su dirección MAC.

Objetivo:
---------
El objetivo que persigue la aplicación es demostrar que se puede acceder al bluetooth del dispositivo y a algunas de sus características y opciones. Para el caso del ejemplo se comprueba el estado del bluetooth y se permite activarlo o desactivarlo. Además se localizan dispositivos cercanos activos con los que después se puede establecer una conexión.

Plugin utilizado:
-----------------
El plugin que se ha utilizado puede encontrarse en la siguiente url:
    - https://github.com/don/BluetoothSerial#setdevicediscoveredlistener
    
Su uso es compatible en:

    * Android
    * iOS
    * Windows Phone 8
    
Tiene limitaciones importantes, como que no permite conectar dos dispositivos Android o iOS entre sí.

Pruebas realizadas:
-------------------
La aplicación se ha probado con éxito sobre Android 4.4.2 como una aplicación nativa empaquetada e instalada para los modelos de dispositivo:
	- BQ Aquaris 5 HD.
	- LG L50 Sporty.
Para ambos terminales se ha logrado escanear una lista de dispositivos con el bluetooth encendido y establecer un enlace con éxito con un MacBook PRO Retina 13" y con un iPhone 4s.

Nota importante:
----------------
La opción que permite acceder a los ajustes del bluetooth y desactivarlo, no está disponible en iOS. Para implementar la desconexión probablemente sería necesario utilizar otro plugin. No se ha hecho ya que no tener certificados de distribución impide la prueba de la aplicación en iOS al tratarse de un plugin de terceros. Lo mismo ocurre con la opción que permite habilitarlo.