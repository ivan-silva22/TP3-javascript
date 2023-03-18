let numeroDeApariciones = [];

for (i = 1; i <= 10; i++){
    let primerDado = Math.floor(Math.random() * (5 + 1) + 1);
    let segundoDado = Math.floor(Math.random() * (5 + 1) + 1);
    document.write(`<h3>Lanzamiento ${i} del primer dado: ${primerDado}</h3>`);
    document.write(`<h3>Lanzamiento ${i} del segundo dado: ${segundoDado}</h3>`);
    suma = primerDado + segundoDado;
    document.write("suma " + suma);
    
   
}




    


