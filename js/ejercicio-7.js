let numero = parseInt(prompt("Ingrese un número"));

function tablaDeMultiplicar (numero){
    document.write(`<h2>Tabla de multiplicar del ${numero}</h2>`);
    document.write("<ul>");
	for(i = 1;i <= 10; i++){
		document.write("<li>");
		document.write(`${numero} x ${i} = ${numero * i}`);
		document.write("</li>");
	}
	document.write("</ul>");
}

tablaDeMultiplicar(numero);