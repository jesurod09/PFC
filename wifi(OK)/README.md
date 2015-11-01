WIFI APP
========

Descripción:
------------
La aplicación accede a algunas de las funcionalidades del WIFI del teléfono. En primer lugar, es capaz de mostrar en caso de que el WIFI se encuentre conectado cuál es la red WIFI que se está utilizando. 
Debajo de la red a la que se encuentra conectado, puede encontrarse un botón que permite activar o desactivar el WIFI en el teléfono.
Después hay un botón que permite mostrar todas las redes que están ya configuradas en el teléfono y por último aparece un botón que permite escanear y mostrar una lista de las redes escaneadas, junto con información sobre ellas(dirección MAC, Frecuencia, Potencia y tipo de seguridad). De entre esta lista de redes escaneadas, es posible conectarse a una de ellas si tiene seguridad WPA, introduciento su SSID y la clave de la red.

Objetivo:
---------
El objetivo que persigue esta aplicación es el de trabajar con el wifi del dispositivo. 

Plugin:
-------
El plugin utilizado (WifiWizard 0.2.9) puede encontrarse en:
* https://github.com/parsonsmatt/WifiWizard

La documentación con respecto a este plugin es algo escasa y se desconocen todos los sistemas operativos para los que es compatible, no obstante puede utilizarse en iOS y Android. Lo que si especifica el autor es que su uso en  iOS es limitado y sólo funciona la función getCurrentSSID.

Pruebas:
--------
Las pruebas para esta aplicación se han realizado con éxito en un teléfono Android 4.4.2 modelos: 

* BQ Aquaris 5 HD
* LG L50 Sporty
