Aplicación EnviaEmail
=====================

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

  Se probó empaquetando la Aplicación para el SO Android, pero la construcción producía un error no esperado debido al uso de este plugin. Dada su gran versatilidad no se descarta su uso para probar la aplicación con otros SOs. El código correspondiente al uso implícito de este plugin, se encuentra comentado en el archivo index.html dentro de la función SendMail.

 * El plugin correspondiente al código subido se encuentra aquí:
 	- https://github.com/jaypratapsingh/send_email

   Se ha elegido este plugin de entre  una multitud de ellos dada su facilidad de uso. Lamentablemente este plugin sólo puede utilizarse con el SO Android.






