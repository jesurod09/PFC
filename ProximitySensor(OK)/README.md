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
El plugin que se ha utilizado se puede encontrar en la siguiente URL:
    - https://github.com/awoken-well/cordova-plugin-proximity
Este plugin es compatible en iOS y Android.

La aplicación podría no funcionar bien en iOS ya que una particularidad de este plugin en  iOS es que este sistema operativo atenúa la pantalla y desactiva los eventos táctiles cuando el sensor de proximidad está en el estado "cerca". Es posible evitar esto con el uso de otras APIs pero la aplicación será rechazada en la App Store.