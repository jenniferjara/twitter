window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	var textArea = document.getElementById("textArea");
	boton.addEventListener("click", function(e) {
        e.preventDefault(); //para que no aparezca en la url a pesar que es tipo submit
		var text = textArea.value;
		mensaje(text);
		textArea.value = "";
		boton.disabled = true;
		regular();
	});
	function mensaje (text) {
		//insertar texto
        var div = document.createElement("div");
        div.className = "nuevoMensaje";
        var contenedor = document.getElementById("mensajes");
        //insertar hora de tweet
        var hora = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

        div.innerText = text+ " " + hora;
        contenedor.insertBefore(div,contenedor.childNodes[0]);
	}
	function regular(){
		textArea.style.cssText = "height:auto";
	}
	
	textArea.addEventListener("keydown", function(e){
		boton.disabled = false;
		var maxCaracteres = 140;
		var valor = document.getElementById("textArea").value;
		var longitud = valor.length;
		var contador = document.getElementById("contador");
		btnDisabled(longitud, maxCaracteres);
		changeColor(longitud,maxCaracteres);
	});
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
			contador.classList.add("green");
			contador.classList.remove("red");
		}else if (longitud >=130 && longitud <= maxCaracteres){
			contador.classList.add("red");
		}else {
			contador.classList.remove("green", "red");
		};
	}

	textArea.addEventListener("keydown", autosize); 
	function autosize(){
		setTimeout(function(){
    		textArea.style.cssText = "height:auto";
	    	textArea.style.cssText = "height:" + textArea.scrollHeight + 'px';
  		},0);
	}
		
});