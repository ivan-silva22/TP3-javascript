let ciudades = [];

do {
   let ciudad = prompt("Ingrese el nombre de una Ciudad");
   ciudades.push(ciudad);
} while (confirm('¿Desea seguir ingresando Ciudades?'));

document.write(`<h2>${ciudades}</h2>`);
document.write(`<p>Longitud del array: ${ciudades.length}</p>`); 
document.write(`<p>Primera posición: ${ciudades[0]}, tercera posición: ${ciudades[2]}, Ultima posición: ${ciudades[ciudades.length - 1]}</p>`);
ciudades.push("paris");
document.write(`<p>Elemento que ocupa la segunda posición: ${ciudades[1]}</p>`)
ciudades[1] = "barcelona";
document.write(`<h2>${ciudades}</h2>`); 













