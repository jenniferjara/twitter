window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	var textArea = document.getElementById("textArea");
	boton.addEventListener("click", function(e) {
        e.preventDefault();//para que no aparezca en la url a pesar que es tipo submit
		var text = textArea.value;
		mensaje(text);
		textArea.value = "";
		boton.disabled = true;
	});
	
	function mensaje (text) {
        var div = document.createElement("div");
        div.className = "nuevoMensaje";
        var contenedor = document.getElementById("mensajes");
        div.innerText = text;
        contenedor.insertBefore(div,contenedor.childNodes[0])
	}

	textArea.addEventListener("keydown", function(){
		boton.disabled = false;
		var maxCaracteres = 140;
		var valor = document.getElementById("textArea").value;
		var longitud = valor.length;
		var contador = document.getElementById("contador");
		//contador.className = "nuevoMensaje";
		if(longitud < maxCaracteres){
			contador.innerText = maxCaracteres - longitud;
		}else {
			contador.innerText = maxCaracteres - longitud;
		};
	});
});