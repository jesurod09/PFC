Aplicación para el envío de SMS
==========================================

Objetivo de la Aplicación:
--------------------------
El objetivo de esta aplicación, es probar que Intel XDK puede utilizarse para el envío de SMS ya sea bien utilizando la aplicación nativa del dispositivo
o bien sin pasar por la aplicación nativa, enviándose directamente cuando se hace Click sobre el botón "Send SMS". En caso de que se quiera usar la aplicación nativa para el envío de mensajes, el programa rellena el destino y el cuerpo del mensaje y lanza la aplicación nativa que no envía el mensaje hasta que el usuario lo desea. En el ejemplo que se ha subido, la aplicación envía el SMS directamente. Si lo que se quiere es utilizar la aplicación nativa sería necesario descomentar la línea 41 y comentar la línea 42 (dispositivos ANDROID).
Se ha utilizado para ello un plugin de terceros por ser más completo, si bien existe un plugin en Intel XDK, el plugin "DEVICE" que también permite el uso de SMS, aunque es obligatorio en este caso usar la aplicación nativa del dispositivo, independientemente del SO para enviar mensajes, y no se finaliza el envío hasta que el usuario presiona enviar en la aplicación nativa. 

Plugin utilizado:
-----------------
El plugin utilizado se conoce como Cordova SMS Plugin 0.1.6

* Repositorio: https://github.com/cordova-sms/cordova-sms-plugin
* Ejemplo: Descargado del mismo enlace
* Particularidades: El plugin es válido para Android, iOS y Windows Phone 8. En el caso de iOS no es posible el envío de SMS sin utilizar la app nativa, es decir la app no puede enviar SMS automáticamente.

Pruebas realizadas:
-------------------
* No pueden utilizarse App Preview ni el emulador para probar esta aplicación ya que se incorpora un plugin de terceros.
* Probado con  éxito en Android 4.4.2 como aplicación nativa para los modelos de dispositivo: 
    - BQ Aquaris 5 HD
    - LG L50 Sporty