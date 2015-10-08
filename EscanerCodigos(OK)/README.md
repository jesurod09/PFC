Escaner QR APP
==============

Descripción:
------------
Esta sencilla aplicación es un escaner de códigos QR. Si el usuario pulsa sobre el botón "Escanear código QR" se abre la cámara del dispositivo y una vez escaneado el códigon, aparece en una ventana la web correspondiente al código escaneado.

Objetivo:
---------
El objetivo de esta aplicación es el de utilizaar la cámara del dispositivo para decodificar códigos QR los cuales suelen llevar a una página web o sirven para descargarse algún tipo de contenido.
La API utilizada sirve para escanear en general cualquier código de barras del cual se devolverá el código decodificado como un string.
Se pretende demostrar que no sólo se puede acceder a características hardware del dispositivo sino también a características del software. Además se hace uso de un plugin que sólo está disponible para su uso si se desarrolla con Intel XDK, de hecho Intel no muestra su repositorio ni su código, lo que demuestra que esta plataforma ofrece algunas ventajas a los desarrolladores que la utilizan.

Plugin utilizado:
-----------------
Para desarrollar esta aplicación, se hace  uso del plugin Device incluído en los Intel XDK Plugin y en concreto de la función intel.xdk.device.scanBarcode(), que permite desarrollar cualquier tipo de escáner de códigos de barras.
Intel no aporta datos sobre su compatibilidad.

El plugin se ha descubierto gracias al tutorial que se puede encontrar en esta web:
    - http://qnimate.com/create-a-barcode-scanner-application-using-intel-xdk-and-php/


Pruebas realizadas:
-------------------
La aplicación se ha probado con éxito en Android 4.4.2 (Modelo de dispositivo BQ Aquaris 5HD).