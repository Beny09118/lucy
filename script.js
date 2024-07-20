document.getElementById("boton").addEventListener("click", function() {
	// Mostrar flores
	document.getElementById("flores").style.display = "block";
	
	// Crear flores
	for (var i = 0; i < 10; i++) {
		var img = document.createElement("img");
		img.src = "C:/Users/benit/Downloads/R.jpeg"; // Reemplaza con la ruta de la imagen de la flor
		document.getElementById("flores").appendChild(img);
	}
	
	// Sonido de canción
	var audio = new Audio("C:/Users/benit/Downloads/Los Primos MX  Mi Bello ngel LETRA.mp3"); // Reemplaza con la ruta del archivo de audio
	audio.play();
	
	// Mensaje aleatorio
	var mensajes = [
		"Te amo más que ayer, pero menos que mañana",
		"Eres la razón por la que mi corazón late",
		"Tu sonrisa es mi felicidad",
		"Estoy loco por ti"
	];
	var mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
	alert(mensaje);
});