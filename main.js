
function encriptar (){
    var texto = document.getElementById("input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").
    replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("img-lupa").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML =textoCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display ="inherit";
    }   

function desencriptar (){ 
    var texto = document.getElementById("input-texto").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").
    replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.getElementById("img-lupa").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = textoCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar(){
    var contenido= document.querySelector("#text2");
    contenido.select();
    document.execCommand("copy");    
}