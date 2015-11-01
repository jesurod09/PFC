Lector NFC App
==============

Descripción:
------------
La aplicación es un escaner de NFC. Cuando se acerque al teléfono un dispositivo con NFC (p.ej: una tarjeta de crédito Contact Less) el dispositivo leerá la información grabada en la etiqueta NFC y la mostrará por pantalla. El ejemplo se ha extrído del siguiente blog:
- http://chariotsolutions.com/blog/post/read-and-write-nfc-tags-with-phonegap-2/

Y el código fuente se ha encontrado en github, se ha utilizado en concreto la carpeta www, y se puede encontrar en este repositorio:
- https://github.com/don/phonegap-nfc-reader
    
La aplicación está escrita sólo para dispositivos Android.
    
Objetivo:
---------
El objetivo de esta aplicación es hacer uso del lector NFC que incorporan algunos dispositivos móviles para leer etiquetas NFC haciendo uso para ello del phonegap-nfc plugin y JavaScript. 


Plugin utilizado:
-----------------
El plugin se puede encontrar en la siguiente url:
    - https://github.com/chariotsolutions/phonegap-nfc

Este plugin está soportado en:
* Android
* Windows Phone 8
* Blackberry 10
    
Pruebas realizadas:
-------------------
Probado con éxito en dispositivo LG L50 Sporty (Android 4.4.2) que se ha utilizado para leer el id de una tarjeta de crédito y el Abono de Transportes de la Comunidad de Madrid.

