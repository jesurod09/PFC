Contactos App
=============

Descripción de la Aplicación:
-----------------------------
La aplicación consta de tres botones:

* Añadir nuevo contacto : Abre la aplicación nativa de contactos y permite añadir un nuevo contacto
* Seleccionar un contacto: Permite seleccionar un contacto de la agenda nativa de contactos y devuelve su nombre y apellido en un mensaje de alerta.
* Listar todos los contactos: Esta opción presenta en pantalla todos los contactos que hay en la agenda del teléfono y asocia a cada dos botones, uno de editar y otro de borrar el contacto.

Objetivo de la aplicación:
--------------------------
Esta aplicación forma parte del kit de aplicaciones que manejan el software nativo del teléfono. Se pretende demostrar que es posible acceder a la agenda de contactos y extraer e insertar información útil en ella.
El ejemplo se ha extraído de la web: 

* http://qnimate.com/accessing-user-phone-contacts-using-intel-xdk/

Observaciones:
--------------
Se ha instalado fastclick para que la aplicación ejecute con más rapidez. Aún así en un dispositivo real la aplicación funciona, pero muy lenta.

Plugins utilizados:
-------------------
Ha sido necesario instalar el plugin propio de Intel XDK de Contactos (Intel XDK Contacts 1.1.14), simplemente marcando la casilla correspondiente en Intel XDK.
La información relativa a cómo debe utilizarse puede encontrarse en la siguiente url:

* https://github.com/01org/cordova-plugin-intel-xdk-contacts
    
    
    * El método addContact():
    _________________________
    Permite añadir un contacto en la agenda nativa del teléfono. Sólo puede utilizarse en iOS y Android.
    
    * El método chooseContact():
    ____________________________
    Permite que el usuario seleccione un  contacto de la agenda nativa del teléfono y extrae información de ella.
    Es compatible en iOS, Android y se encuentra en fase beta para Windows 8 y Windows Phone 8.
    
    * El método getContacts():
    __________________________
    Permite recorrer la base de datos de contactos y extraer información de ella. En el caso del ejemplo se utiliza para listar todos los contactos.Es compatible en iOS, Android y se encuentra en fase beta para Windows 8 y Windows Phone 8.
    
Pruebas realizadas:
------------------
* La aplicación se ha probado con éxito en el emulador de Intel XDK.

* La aplicacion se ha probado sobre App Preview en dispositivos con Android 4.4.2, en los modelos BQ Aquaris 5 HD y LG L50 Sporty. En ambos funciona bien la opción que permite añadir un nuevo contacto pero las otras dos opciones presentan un comportamiento herrático.

* La aplicación se ha probado sobre App Preview para iOS 9, pero no ha funcionado.

* La aplicación se ha probado con relativo éxito como aplicación nativa en  dispositivos reales con Android 4.4.2 (Modelos de Dispositivo BQ Aquaris 5 HD y LG L50 Sporty). Sin embargo se ha observado que en el BQ Aquaris 5 HD las funciones chooseContact() y getContacts() tienen una ejecución muy lentas, posiblemente debido a la elevada cantidad de contactos que existen en el dispositivo. Finalmente la aplicación no es capaz de editar o eliminar contactos en dispositivos Android.




