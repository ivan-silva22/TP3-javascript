let numero = parseInt(prompt("Ingrese un número"));

function numeroParOImpar (numero){
    if (numero % 2 ===  0){
        return (`<h1>El número ${numero} es PAR</h1>`);
    }else{
        return (`<h1>El número ${numero} es IMPAR</h1>`);
    }
}

document.write(numeroParOImpar(numero));