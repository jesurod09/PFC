EscanerCodigos APP
==================

Descripción:
------------
Esta sencilla aplicación es un escaner de códigos unidimensionales, como los códigos de barras tradicionales o bidimensionales, como los códigos QR. Si el usuario pulsa sobre el botón "Escanear código" se abre la cámara del dispositivo y una vez escaneado el código, aparece en primer lugar un mensaje de alerta, con el string descifrado, y acto seguido si el código representa una página web aparece en una ventana la web correspondiente al código escaneado.

Objetivo:
---------
El objetivo de esta aplicación es el de utilizaar la cámara del dispositivo para decodificar códigos, que corresponden a un string y los cuales suelen llevar a una página web o sirven para descargarse algún tipo de contenido.
La API utilizada sirve para escanear en general cualquier código de barras del cual se devolverá el código decodificado como un string.
Se pretende demostrar que no sólo se puede acceder a características hardware del dispositivo sino también a características del software. Además se hace uso de un plugin que sólo está disponible para su uso si se desarrolla con Intel XDK.

Plugin utilizado:
-----------------
Para desarrollar esta aplicación, se hace  uso del plugin Device incluído en los Intel XDK Plugin y en concreto de la función intel.xdk.device.scanBarcode(), que permite desarrollar cualquier tipo de escáner de códigos de barras.
El plugin es compatible en iOS y Android y la función scanBarcode utilizada también.

El plugin se ha descubierto gracias al tutorial que se puede encontrar en esta web:
    - http://qnimate.com/create-a-barcode-scanner-application-using-intel-xdk-and-php/


Pruebas realizadas:
-------------------
* La aplicación se ha probado sobre el emulador de Intel XDK. Al pulsar sobre "Escanear Código" el emulador devuelve una URL predefinida, lo que hace que se cargue una página web en el canvas de la aplicación.

* La aplicación se ha probado con éxito en Android 4.4.2 sobre App Preview para los modelos de dispositivo: 
    - BQ Aquaris 5HD
    - LG L50 Sporty

* La aplicación se ha probado con App Preview en iOS 9, sobre el terminal:
    - iPhone 4s
    En este caso no ha habido éxito y la aplicación no ha funcionado.

* La aplicación se ha probado con éxito empaquetándola e instalándola como una aplicación nativa en Android 4.4.2 para los modelos de dispositivo: 
    - BQ Aquaris 5HD
    - LG L50 Sporty