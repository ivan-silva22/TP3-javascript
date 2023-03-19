let numeros = [];
let numeroDeApariciones = []
let elementosUnicos = []
let contador = 1;

for (i = 1; i <= 10; i++){
    let primerDado = Math.floor(Math.random() * (5 + 1) + 1);
    let segundoDado = Math.floor(Math.random() * (5 + 1) + 1);
    document.write(`<h3>Lanzamiento ${i} del primer dado: ${primerDado}</h3>`);
    document.write(`<h3>Lanzamiento ${i} del segundo dado: ${segundoDado}</h3>`);
    suma = primerDado + segundoDado;
    numeros.push(suma);
}

numeros.sort();

for(k = 0;k < numeros.length; k++){
    if(numeros[k + 1] === numeros[k]){
        contador++;
        
    }else{
        elementosUnicos.push(numeros[k])
        numeroDeApariciones.push(contador);
        contador = 1;
    }  
    
}

document.write(`<h4>Suma ${numeros}</h4>`);

for (j = 0;j < elementosUnicos.length; j++){
    document.write(`<h4>El valor ${elementosUnicos[j]} se repite ${numeroDeApariciones[j]}</h4>`);
}














    


