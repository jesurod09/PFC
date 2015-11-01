Ahorcado APP:
-------------

Descripción:
------------
Esta aplicación implementa el conocido juego del ahorcado. El jugador tendrá que introducir de cada vez  una letra para averiguar la palabra secreta. Si acierta todas las letras se muestra en un mensaje de alerta que es el ganador y el juego se recarga de nuevo con una nueva palabra, en caso de que cometa un error, se va pintando un muñeco en el canvas hasta que se agotan todos los intentos y muere, momento en el que se muestra un mensaje de alerta al jugador diciendo que ha perdido la partida y entonces acto seguido se recarga de nuevo el juego con una nueva palabra.

Objetivo:
---------
El objetivo de esta aplicación es comprobar el renderizado de una aplicación que utiliza un canvas para pintar dinámicamente sobre la Web View de diferentes terminales.

Plugins utilizados:
-------------------
Ninguno

Pruebas realizadas:
-------------------
La aplicación se ha probado con éxito en las siguientes plataformas:
* Emulador intel XDK.

* App Preview: Probado en  Android 4.4.2 en los modelos de dispositivo BQ Aquaris 5 HD, LG L50 Sporty y iPhone 4s. En el caso de los dos terminales Android el canvas no termina de renderizar correctamente cargándose el fondo del mismo de color negro cuando debería hacerlo de color amarillo. Para el iPhone sin embargo el funcionamiento observado es el correcto.

* Igualmente se ha probado sobre dispositivos Android 4.4.2 instalándola como aplicación nativa en los modelos LG L50 Sporty y en un BQ Aquaris 5 HD. En ambos casos la aplicación renderiza bien cuando se carga inicialmente. Sin embargo cuando se recarga la partida al terminar, el BQ Aquaris 5HD renderiza el canvas con el fondo en color negro cuando debería hacerlo en color amarillo, algo que no ocurre con el otro terminal. 
