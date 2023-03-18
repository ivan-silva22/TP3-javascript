let cadena = prompt("Ingrese un texto");

function cadenaDeTexto (cadena){
    if(cadena === cadena.toUpperCase()){
        return "<h3>la cadena de  texto esta formada solo por mayúsculas</h3>";
    }else if(cadena === cadena.toLowerCase()){
        return "<h3>la cadena de  texto esta formada solo por minúsculas</h3>";
    }else{
        return "<h3>la cadena de  texto esta formada por mayúsculas y minúsculas</h3>";
    }
}

document.write(cadenaDeTexto(cadena));