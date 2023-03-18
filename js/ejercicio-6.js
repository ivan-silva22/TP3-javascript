let ladoA = parseInt(prompt("Ingrese el valor del lado A"));
let ladoB = parseInt(prompt("Ingrese el valor del lado B"));

function perimetro (ladoA,ladoB){
    let p = 2 * (ladoA + ladoB);
    return p;
}

document.write(`<h3>El perimetro del rectángulo es: ${perimetro(ladoA,ladoB)}</h3>`);