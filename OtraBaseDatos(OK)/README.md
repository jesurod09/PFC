OtraBaseDatosApp
================

Descripción:
------------
La aplicación consta de un formulario con 3 campos que permite enviar los datos. Una vez que se envía se accede a una segunda pantalla donde se muestran en forma de lista todos los datos que se almacenaron con anterioridad en esa base de datos SQL.
Objetivo:
---------
El objetivo ha sido acceder a una base de datos desde la aplicación móvil creada. El ejemplo se ha extraído de:
    - http://2noodles.com/miamiforum/viewtopic.php?f=12&t=58
Ha sido necesario hacer uso de jquery y jquery mobile para poder ponerla en funcionamiento y se ha empleado Ajax.

Plugins:
--------
No ha sido necesario el uso de plugins para su funcionamiento.

Pruebas:
--------
La aplicación se ha probado con éxito en un dispositivo real con Android 4.4.2(Modelo de dispositivo BQ Aquaris 5HD).
Como consecuencia de emplear Ajax parece ser que existe un problema con Intel XDK con la versión del CLI de Cordova 4.1.2 por lo que al construir el APK para Android, la aplicación no tiene el funcionamiento esperado y vuelve inmediatamente desde la página 2 a la página del formulario por lo que no se visualiza la lista de datos introducidos. Este problema lo he encontrado reflejado en la web de StackOverflow:
http://stackoverflow.com/questions/30255454/cordova-hybrid-app-fails-legacy-android-build-works
En esa web se sugiere cambiar la versión del CLI de Cordova por la 3.5 para que Ajax funcione correctamente. Lo he intentado pero esa no ha sido la solución.
He encontrado una manera de solucionarlo. Hasta ahora todas las apps las he empaquetado utilizando la opción Cordova Hybrid App pero si la construyo como una Legacy Hybrid App finalmente la aplicación termina funcionando correctamente. (ACTUALIZACIÓN 13/09/2015: Esta solución ha dejado de  funcionar)

La aplicación funciona correctamente en cualquiera de los dispositivos disponibles en el emulador de Intel XDK.

