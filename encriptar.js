//Declaracion de variables
var mensaje = document.querySelector("#texto-encriptar");
var btnEncrip = document.querySelector("#btn1");
var btnDecrypt = document.querySelector("#btn2");
var btnCopiar = document.querySelector("#btnCopy");
var msjn = document.querySelector("#txtEncript");


function textoEncriptar (texto) {
	if (texto == 'a') {
		texto = 'ai';
		return texto;
	} else if (texto == 'e') {
        texto = 'enter';
        return texto;
	} else if (texto == 'i') {
        texto = 'imes';
        return texto;
    } else if (texto == 'o') {
        texto = 'ober';
        return texto;
    } else if (texto == 'u') {
        texto = 'ufat';
        return texto;
    }
}


function encriptar(texto) {
	var msjEncriptado = texto.replace(/a|e|i|o|u/g, textoEncriptar);
	return msjEncriptado;
}


function textoDesencriptar(texto) {
	if (texto == 'ai') {
		texto = 'a';
		return texto;
	} else if (texto == 'enter') {
		texto = 'e';
		return texto;
	} else if (texto == 'imes') {
		texto = 'i';
		return texto;
	} else if (texto == 'ober') {
		texto = 'o';
		return texto;
	} else if (texto == 'ufat') {
		texto = 'u';
		return texto;
	}
}

function desencriptar(texto) {
	var desencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, textoDesencriptar);
	return desencriptado;
}

btnEncrip.addEventListener('click',function (event) {
	event.preventDefault();
	var texto = mensaje.value;
	var msgFinal = encriptar(texto);
	msjn.value = msgFinal;
});


btnDecrypt.addEventListener('click', function (event) {
	event.preventDefault();
	var texto = mensaje.value;
	var msgFinal = desencriptar(texto);
	msjn.style.color = "";
	msjn.value = msgFinal;
})


btnCopiar.addEventListener('click', function (event) {
	event.preventDefault();
	msjn.select();
	navigator.clipboard.writeText(msjn.value); 
	}
)
