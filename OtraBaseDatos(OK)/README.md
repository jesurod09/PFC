Esta aplicación se ha extraído del tutorial de esta página web:
---------------------------------------------------------------
http://2noodles.com/miamiforum/viewtopic.php?f=12&t=58



Observaciones:
--------------
No ha sido necesario el uso de plugins para su funcionamiento.

Ha sido necesario hacer uso de jquery y jquery mobile para poder ponerla en funcionamiento y se ha empleado Ajax.

Como consecuencia de emplear Ajax parece ser que existe un problema con Intel XDK con la versión del CLI de Cordova 4.1.2 por lo que al construir el APK para Android, la aplicación no tiene el funcionamiento esperado. Este problema lo he encontrado reflejado en la web de StackOverflow:
http://stackoverflow.com/questions/30255454/cordova-hybrid-app-fails-legacy-android-build-works

En esa web se sugiere cambiar la versión del CLI de Cordova por la 3.5 para que Ajax funcione correctamente. Lo he intentado pero esa no ha sido la solución.

He encontrado una manera de solucionarlo. Hasta ahora todas las apps las he empaquetado utilizando la opción Cordova Hybrid App pero si la construyo como una Legacy Hybrid App finalmente la aplicación termina funcionando correctamente.

