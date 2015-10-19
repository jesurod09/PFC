EnviaEmail APP
==============

Descripción:
------------
La aplicación consta de seis cajetines correspondientes a los campos principales con los que se suele rellenar  un correo electrónico. Estos campos son:
	- Destino
	- CC
	- CCO
	- Asunto
	- Adjunto
	- Mensaje

Una vez el que el usuario termina de rellenar los campos, debe hacer click sobre el botón enviar momento en el que se abrirá la aplicación nativa de envío de correo electrónico.

Objetivo:
---------
El objetivo que se persigue con el desarrollo de esta aplicación, es demostrar que se puede acceder a la aplicación nativa de encío de correo electrónico del SO y se pueden autocompletar los campos del email con la información recibida desde nuestra App.

Plugins utilizados:
-------------------
* En un primer momento se utilizó el siguiente Plugin:
	- http://plugins.cordova.io/#/package/de.appplant.cordova.plugin.email-composer

  Este Plugin goza de una gran popularidad ya que su autor afirma que es válido para las plataformas:
 	- ios,  android,  amazon-fireos,  wp8,  windows

  Se probó empaquetando la Aplicación para el SO Android, pero la construcción producía un error no esperado debido provocado por la incorporación de este plugin, por ese motivo se descartó. El código correspondiente al uso implícito de este plugin, se encuentra comentado en el archivo index.html dentro de la función SendMail (cordova.plugins.email.open).

* Acto seguido se probó el uso del siguiente plugin:
 	- https://github.com/jaypratapsingh/send_email

   Se eligió este plugin de entre  una multitud de ellos dada su facilidad de uso. Lamentablemente este plugin sólo puede utilizarse con el SO Android por lo que finalmente también se descartó.
   
* Finalmente con el objetivo de garantizar que la aplicación fuera válida en iOS y Android se optó por el plugin "Intel XDK Device" incluído en Intel XDK, entre los plugins propios de Intel XDK. Este plugin lamentablemente a diferencia del anterior no permite el envío de archivos adjuntos.

Pruebas:
--------
* La aplicación se ha probado con éxito sobre el emulador de Intel XDK, que abre  la aplicación nativa de correo del equipo con los campos rellenos.

* La aplicación se ha probado con éxito sobre App Preview en Android 4.4.2 para los terminales: 
	- BQ Aquaris 5 HD
	- LG L50 Sporty

* La aplicación se ha probado en iOS 9 sobre App Preview para un  iPhone 4s. En este caso la aplicación no funciona. Es difícil saber si instalándola como aplicación nativa sí que funcionaría.

* La aplicación se ha probado con éxito empaquetándola e instalándola como aplicación nativa en Android 4.4.2 para los terminales: 
	- BQ Aquaris 5 HD
	- LG L50 Sporty




