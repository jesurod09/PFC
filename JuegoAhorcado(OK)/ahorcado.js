var palabra;
var hombre,l, espacio;

 var arrayPalabras = ["Casa", "Coche", "Camión", "Botella", "Alcalde",
 "Boligrafo", "Agenda", "Mesa", "Tablero", "Juego", "Posit", "Positivo",
 "Negativo", "Ahorcado", "Biblia", "Coran", "Mellizo", "Gemelo",
 "Programar", "Talento","Empresa","Empleado","Computador", "Ordenador",
 "Camarero","Comanda","Cerro","Cumulonimbo","Estratosfera","Mesosfera",
 "Europa", "America","Africa","Asia","Oceania","Antartida","Ventilador",
 "Calefaccion","Circulo","Cuadrado","Triangulo","Rectangulo","Hexagono",
 "Pistola","Cartuchera","Vaquero","Reloj","Engranaje","Tibia","Craneo",
 "Cubito","Radio","Perone","Riñonera","Titan"];


function iniciar()
{
	console.log(arrayPalabras.length);
	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");

	//el tamaño del canvas se puede poner en el html o aquí
	canvas.width = 400;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");

	//CREO UN NUEVO HOMBRE
    hombre = new Ahorcado(contexto);

    //SELECCIONO UNA PALABRA Y LA CONVIERTO A MAYUSCULAS
    var palabraIndexada = aleatorio(0, arrayPalabras.length - 1);
    console.log("La palabra indexada es " + palabraIndexada);
    palabra = arrayPalabras[palabraIndexada];
    console.log("Y la palabra es " + arrayPalabras[palabraIndexada]);

    //palabra = palabra[palabraIndexada];
    palabra = palabra.toUpperCase(); //pasamos la palabra a mayuscula
    
    

    //Declaro un array  con n espacios de acuerdo al largo de la palabra
    espacio = new Array(palabra.length);

    //Agregamos una funcion que se dispare al darle click al botón
    b.addEventListener("click", agregarLetra);

    mostrarPista(espacio);
}

function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

function agregarLetra()
{
	var letra = l.value;
	l.value = "";
	mostrarPalabra(palabra, hombre, letra);
	document.getElementById("letra").focus(); //devuelvo el foco al cajetín
}

function mostrarPalabra(palabra, ahorcado, letra)
{
	var encontrado = false;
	var p;
	letra = letra.toUpperCase();
	for (p in palabra)
	{
		if(letra == palabra[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);
	//var pista = document.getElementById("pista").innerHTML;
	//console.log("el texto es " + pista);


	if(!encontrado)
	{
		ahorcado.trazar();
	}

	if(!ahorcado.vivo)
	{
		alert("La palabra era: " + palabra);
		window.location.reload();
	}

}

function comparaStrings(texto){
	var palabraAuxiliar = ""; //quitar si procede
	for(var j = 0; j < palabra.length; j++)
			{
				console.log("La palabra es " + palabra[j] + " ");
				palabraAuxiliar = palabraAuxiliar + palabra[j] + " ";
			}

			 console.log("AAAA " + texto);
			 console.log("BBBB " + palabraAuxiliar);
			 if(texto == palabraAuxiliar)
			 {
			 	alert("¡ENHORABUENA!\n You are the champion my friend");
			 	window.location.reload();

			 }

}

function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var largo = espacio.length;
	

	for(i = 0; i < largo; i++)
	{
		if(espacio[i] != undefined)
		{
			texto = texto + espacio[i] + " ";
			

		}
		else
		{

			texto += "_ ";
		}
	}
	comparaStrings(texto);
	pista.innerText = texto;

}


// Declaración de la clase ahorcado:
// 	* Dibuja el poste y va trazando el cuerpo
var Ahorcado = function(con)
{
	//this es las variables locales de la clase, accesibles en toda la clase
	this.contexto = con; // El contexto del canvas
	this.maximo = 5; // Nº máximo de intentos antes de morir
	this.intentos = 0; // Intentos en el momento inicial
	this.vivo = true; //por defecto arranco vivo
	this.dibujar();
	

}

Ahorcado.prototype.dibujar = function()
{
	var dibujo = this.contexto;

	//Dibujando el poste
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "brown";
	dibujo.stroke();
	dibujo.closePath();

	if(this.intentos > 0){
		//Intentos = 1 --> rostro
		dibujo.beginPath();
		dibujo.arc(150,140,40,0, 2 * Math.PI, false);
		dibujo.strokeStyle = "#F00";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();

		if(this.intentos > 1){
			// intentos = 2 -->torso
			dibujo.beginPath();
			dibujo.moveTo(150,180);
			dibujo.lineTo(150,250);
			dibujo.strokeStyle = "#F00";
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();

			if(this.intentos > 2){
				// intentos = 3 --> brazos
				dibujo.beginPath();
				dibujo.moveTo(120,220);
				dibujo.lineTo(150,180);
				dibujo.lineTo(180,220);
				dibujo.strokeStyle = "#F00";
				dibujo.lineWidth = 5;
				dibujo.stroke();
				dibujo.closePath();

				if(this.intentos > 3){
				// intentos = 4 --> piernas
					dibujo.beginPath();
					dibujo.moveTo(120,290);
					dibujo.lineTo(150,250);
					dibujo.lineTo(180,290);
					dibujo.strokeStyle = "#F00";
					dibujo.lineWidth = 5;
					dibujo.stroke();
					dibujo.closePath();

					if(this.intentos > 4){
					// Intentos = 5 --> ojos muertos
						dibujo.beginPath();

						//ojo izquierdo
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120);
						dibujo.lineTo(125,145);

						//ojo derecho
						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);

						dibujo.strokeStyle = "blue";
						dibujo.lineWidth = 5;
						dibujo.stroke();
						dibujo.closePath();
					}
				}
			}
		}
	}
}

Ahorcado.prototype.trazar = function() 
{
	this.intentos++;
	if(this.intentos >= this.maximo)
	{
		this.vivo = false;
		alert("¡Estás muerto!");
	}
	this.dibujar();
}







