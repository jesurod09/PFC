Ahorcado APP:
-------------

Descripción:
------------
Esta aplicación implementa el conocido juego del ahorcado. El jugador tendrá que introducir de cada vez  una letra para averiguar la palabra secreta. Si acierta todas las letras se muestra en un mensaje de alerta que es el ganador y el juego se recarga de nuevo con una nueva palabra, en caso de que cometa un error, se va pintando un muñeco en el canvas hasta que se agotan todos los intentos y muere, momento en el que se muestra un mensaje de alerta al jugador diciendo que ha perdido la partida y entonces acto seguido se recarga de nuevo el juego con una nueva palabra.

Objetivo:
---------
El objetivo de esta aplicación es comprobar el renderizado de una aplicación que utiliza un canvas para pintar.

Plugins utilizados:
-------------------
Ninguno

Pruebas realizadas:
-------------------
La aplicación se ha probado con éxito en las siguientes plataformas:
- Emulador intel XDK
- App Preview

También se ha  probado instalando la aplicación como una aplicación nativa en un dispositivo con Android 4.4.2 (Modelo de dispositivo BQ Aquaris 5 HD). La aplicación se carga con éxito la primera vez, pero cuando se inicia una nueva partida se pierde el fondo amarillo del canvas, lo que demuestra que no funcniona demasiado bien el renderizado del canvas en algunos dispositivos Android.