;(function(){
	window.addEventListener("load", iniciaPagina);
	var contenedor = document.getElementById("mensajes");
	var boton = document.getElementById("boton");
	var textArea = document.getElementById("textArea");
	var maxCaracteres = 140;

	function iniciaPagina(){
		boton.disabled = true;
		boton.addEventListener("click", mensaje);
		textArea.addEventListener("keydown", cambioTexto);
	}
	function mensaje(e) {
		e.preventDefault();
		var text = this.previousElementSibling;
		var div = document.createElement("div");
		var tweet = document.createElement("span");
		var boxHour = document.createElement("span");
		var hora = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
	   /* div.innerText = text.value + " " + hora;*/
	    tweet.classList.add("tweet");
	    boxHour.classList.add("tweet");
		tweet.innerText = text.value;
		boxHour.innerText = hora;
		div.appendChild(tweet);
		div.appendChild(boxHour);
		div.classList.add("nuevoMensaje");
		contenedor.appendChild(div);

		text.value = "";
		this.disabled = true;
		contador.innerText = 140;
	}
	function cambioTexto(){
		this.nextElementSibling.disabled = false;
		var valor = this.value;
		var longitud = valor.length;
		var contador = document.getElementById("contador");
		btnDisabled(longitud, maxCaracteres);
		changeColor(longitud,maxCaracteres);
	}
	function btnDisabled(longitud,maxCaracteres){
		if (longitud > maxCaracteres){
			boton.disabled = true;
		};
		if(longitud < maxCaracteres){
			contador.innerText = maxCaracteres - longitud;
		}else {
			contador.innerText = maxCaracteres - longitud;
		};
	}
	function changeColor(longitud, maxCaracteres){
		if (longitud >= 120 && longitud <= 129){
			contador.classList.add("verde");
			contador.classList.remove("rojo");
		}else if (longitud >=130 && 
			longitud <= maxCaracteres){
			contador.classList.add("rojo");
			contador.classList.remove("verde");
		}else {
			contador.classList.remove("verde", "rojo");
			contador.classList.add("celeste");
		};
	}
})();