//alert("Hola")

const contenido = document.getElementById("contenido");

let nombre = "Daniel Espinosa";
let edad = 24;

/*contenido.innerHTML = "<h2>" + nombre + "</h2>"  +
"<h3>Edad: " + edad + "</h3>";*/

addContenido("<h2>" + nombre + "</h2>"  +
                "<h3>Edad: " + edad + "</h3>");

// CONDICIONAL

if(edad > 60) {
     console.log("deberias de estar jubilado");
}else if(edad > 18) {
    console.log("deberias estar trabajando");
} else {
    console.log("deberias estar jugando");
}

// ARRAY

let edades = [12, 45, 32, 87, 75];
console.log(edades.length);

// BUCLE

for(let i = 0; i <= edades.length; i++){
/*    console.log(i);
    contenido.innerHTML += "<p>La edad es:" + edades[i] +"</p>";*/
    addContenido("<p>La edad es: " + edades[i] +"</p>");
}

// FUNCION

function addContenido(nuevoContenido){
    //console.log(nuevoContenido);
    contenido.innerHTML += nuevoContenido;
}