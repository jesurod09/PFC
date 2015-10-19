CamaraSoftware APP
==================


Descripción de la aplicación:
-----------------------------
La aplicación incorpora 4 botones:
	 - "Captura Foto" -> Toma una foto normalmente
	 - "Captura Foto Editable" ->Toma una foto y permite configurar algunas de sus características rellenando el formulario asociado.
	 - "Desde Libreria de Fotos" ->Toma una foto desde la librería de fotos
	 - "Desde Álbum de Fotos" -> Toma una foto desde el álbum de fotos
Debajo de los cuatro botones hay dos etiquetas <image>. La etiqueta superior coloca la imagen tomada desde los dos primeros botones mientras que las segunda coloca la imagen tmada por c ualquiera de las otras dos opciones.

Objetivo:
---------
El objetivo es demostrar que es posible configurar determinados aspectos multimedia. En este caso se ha seleccionado la cámara y la captura de imágenes.

Plugin utilizado:
-----------------
El plugin que se ha utilizado es el plugin "Camera" incluído en Intel XDK en su versión 1.2.0. Este plugin también podría haberse incluído en la aplicación como si de un plugin de terceros se tratase extrayendo la información (ID y repositorio) de esta URL:
    https://github.com/apache/cordova-plugin-camera

Este plugin provee una API para tomar fotos  y configurarlas.
Para poder utilizar este plugin es importante comprobar que el dispositivo está listo para usarse usando la función onDeviceReady.

  
Pruebas realizadas:
-------------------
* La aplicación se ha probado sobre el emulador de Intel XDK, pero en éste la funcionalidad es limitada ya que se simula la captura de una imagen tomando la foto de un archivo incluido en el equipo de trabajo para cualquiera de las cuatro opciones.

* La aplicación se ha probado con éxito en App Preview sobre Android 4.4.2 para los terminales:
  - BQ Aquaris 5HD.
  - LG L50 Sporty.
 Se produce error al configurar la imagen con codificación PNG

* La aplicación se ha probado con éxito sobre App Preview para iOS 9 utilizando un dispositivo iPhone 4s.

* La aplicación se ha probado con éxito empaquetándola e instalándola como aplicación nativa en  Android 4.4.2 sobre los terminales:
  - BQ Aquaris 5HD.
  - LG L50 Sporty.
 Se produce error al configurar la imagen con codificación PNG
 

Nota importante:
----------------
* Las dos opciones "Desde Libreria de Fotos" y "Desde Álbum de Fotos" tienen comportamientos diferentes en iOS, pero en Android las fotos se toman desde la Galería de Fotos.

* El plugin utilizado, únicamente permite utlizar la cámara trasera en Android independientemente de la opción seleccionada.