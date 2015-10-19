App SistemaDeArchivos
=====================
Este ejemplo ha sido desarrollado por mí basándome en el ejemplo completo encontrado en este turorial:
http://qnimate.com/working-with-file-system-using-intel-xdk/

Descripción de la aplicación:
-----------------------------
La aplicación permite escribir el nombre de un fichero así como su contenido y guardarlo en el directorio raíz de almacenamiento del dispositivo. Además la aplicación muestra todos los archivos que se encuentran en el directorio raíz y también es capaz de leer los archivos de texto de ese directorio si se indica su nombre.

Objetivo:
---------
El objetivo principal de esta aplicación es introducir el uso del sistema de ficheros del dispositivo. Se trabajan aspectos como la creación de ficheros, su escritura/lectura y mostrar el contenido de un directorio.

Repositorio utilizado:
----------------------
Se ha utiliado el Plugin "FILE" incluído en Intel XDK y que también puede encontrarse en esta url: http://cordova.apache.org/docs/en/3.3.0/cordova_file_file.md.html#FileEntry

Plataformas en las que debería funcionar la aplicación:
-------------------------------------------------------
 - Amazon Fire OS
 - Android
 - BlackBerry 10
 - iOS
 - Windows Phone 7 and 8
 - Windows 8
 
Plataformas en las que se ha probado:
-------------------------------------
* La aplicación se ha probado sobre el emulador de Intel XDK. Sin embargo en este emulador no es posible leer el archivo creado ni se listan los archivos que hay en el directorio.

* La aplicación se ha probado con éxito en App Preview para Android 4.4.2 en los modelos de dispositivo:
	- BQ Aquaris 5 HD.
	- LG L50 Sporty

* La aplicación se ha probado con éxito en App Preview para iOS 9, en un terminal:
	- iPhone 4s.

* La aplicación se ha probado con éxito empaquetándola e instalándola como aplicación nativa en Android 4.4.2 para los dispositivos:
	- BQ Aquaris 5 HD.
	- LG L50 Sporty.
