//Botón enviar
var boton = document.getElementById("form-submit");
boton.addEventListener("click", validateForm);

function validateForm(){
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var asunto = document.getElementById("asunto").value;
	var mensaje = document.getElementById("mensaje").value;

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		alert("Debe ingresar un nombre válido");
	}
	else if(!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre)){
		alert("El nombre debe comenzar con mayúscula");
	}
	else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
		alert("Debe ingresar un correo válido");
	}
	else if(asunto == null || asunto.length == 0 || /^\s+$/.test(asunto)){
		alert("Debe ingresar su asunto");
	}
	else if(mensaje.length > 100 || mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)){
		alert("Debe ingresar un mensaje. Máximo 100 caracteres");
	}else{
		document.getElementById("nombre").value ="";
		document.getElementById("email").value = "";
		document.getElementById("asunto").value = "";
		document.getElementById("mensaje").value ="";	
		alert("Enviado");
	}
}

//Botón inscríbete
var botonInsc = document.getElementById("insc-but");
botonInsc.addEventListener("change", inscripcion);

function inscripcion(){
	var txt = document.querySelector(".cont-home h1");
	txt.innerHTML = "Love is Respect";
}