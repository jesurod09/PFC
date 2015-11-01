App ProximitySensor:
====================

Descripción:
------------
La aplicación muestra por pantalla el mensaje "cerca" si se tapa el sensor de proximidad del dispositivo y el mensaje "lejos" si no se está tapando. El estado se actualiza cada 100 milisegundos. La aplicación está inspirada en el Ejemplo 1 encontrado en la documentación del plugin, cuya URL se facilita más abajo.

Objetivo:
---------
El objetivo de esta aplicación es obtener acceso al sensor de proximidad de un dispositivo.

Plugins utilizados:
-------------------
El plugin que se ha utilizado es el plugin Proximity Sensor 0.2.1 y se puede encontrar en la siguiente URL:
	- https://github.com/awoken-well/cordova-plugin-proximity
Este plugin es compatible en iOS y Android.

La aplicación podría no funcionar bien en iOS ya que una particularidad de este plugin en  iOS es que este sistema operativo atenúa la pantalla y desactiva los eventos táctiles cuando el sensor de proximidad está en el estado "cerca". Es posible evitar esto con el uso de otras APIs pero la aplicación será rechazada en la App Store.

Pruebas realizadas:
-------------------
La aplicación se ha probado con éxito sobre dispositivos reales instalada como aplicación nativa en Android 4.4.2 para los modelos:
* BQ Aquaris 5 HD 
* LG L50 Sporty

Mientras que en el BQ el refresco de los datos en pantalla es inmediato, ya que se captura el estado del sensor cada 100 ms, en el LG puede apreciarse un pequeño delay. Esto puede ser debido a la velocidad de procesamiento con la que cuentan ambos terminales,(el BQ tiene 4 núcleos frente a los dos núcleos del LG), o a la "Web View" que utiliza cada dispositivo para renderizar la aplicación.