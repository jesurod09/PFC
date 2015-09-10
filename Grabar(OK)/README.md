Grabar App
==========

Descripción:
------------
Esta sencilla aplicación graba un audio en formato .amr haciendo uso del micrófono del teléfono móvil. Para ello cuenta con un bótón que el usuario debe presionar si quiere comenzar la grabación. Una vez pulsado, aparece un mensaje de alerta, que avisa al usuario de que se iniciará la grabación una vez que pulse el botón aceptar. En ese momento se puede comenzar a hablar y al cabo de 10 segundos otro mensaje de alerta avisará de que la grabación ha concluído.
La grabación se almacenará con el nombre grabacionJRR.amr en la raíz de la memoria del dispositivo.


Objetivo:
---------
El objetivo de esta aplicación es el de obtener acceso al micrófono del terminal móvil.

Plugin utilizado:
-----------------
Para el desarrollo de esta aplicación, se ha hecho uso del plugin "Media" incluído en Intel XDK en su versión 0.2.15. El plugin puede encontrarse también en la siguiente dirección web:

    - https://github.com/apache/cordova-plugin-media
    
El autor del plugin afirma que las plataformas donde se permite su uso son las siguientes:
    * Android
    * BlackBerry 10
    * iOS
    * Windows Phone 7 and 8
    * Tizen
    * Windows 8
    * Windows
    * Browser

Se han utilizado dos métodos importantes, media.startRecord() y media.stopRecord().

* Método media.startRecord().
.............................
    Este método se utiliza para comenzar a grabar un archivo de audio y está soportado en las plataformas:
        * Android
        * iOS
        * Windows Phone 7 y 8
        * Windows
    En el caso de Android su uso implica que la extensión del archivo que se graba debe ser .amr
    En el caso de iOS la extensión de los archivos debe ser .wav y la grabación se coloca en el directorio /tmp de la aplicación si no       se especifica lo contrario. Cualquier subdirectorio indicado durante el periodo de grabación debe ya existir previamente.
    
* Método media.stopRecord().
............................
    Este método detiene la grabación del archivo de audio y está soportado en las plataformas:
        * Android
        * iOS
        * Windows Phone 7 y 8
        * Windows
        
Pruebas realizadas:
-------------------
La aplicación, con el código que se adjunta, ha sido probada con éxito para Android 4.4.2 (Modelo de dispositivo BQ Aquaris 5HD)
