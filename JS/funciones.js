
class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad   = edad;
    }
}

const calcularPromedio = (total, cantidad) => {return total / cantidad};
const acumular  = function (a, b) { return a + b }

function promedioEdadVisitantes(){
    let cont=0, nombre, edad, acumulador=0, promedio;
    let persona;
    let miArray = [];

    nombre=prompt("Ingrese su nombre o vacio en caso de querer finalizar");
    while(nombre != ""){
        cont=cont+1;
        edad=parseInt(prompt("Cuantos años tenes?"));
        while(edad <18){
            edad=parseInt(prompt("Error, debe ser mayor de 18. Cuantos años tenes?"));
        }
        persona= new Persona(nombre, edad);
        miArray.push(persona);
        acumulador= acumular(acumulador , edad);
        nombre=prompt("Ingrese su nombre o vacio en caso de querer finalizar");
    }
    promedio = calcularPromedio(acumulador, cont);
    alert("La cantidad de clientes que visitaron la pagina fue de, "+cont+ " y el promedio de edad de los visitantes fue de, "+promedio.toFixed(1));

    let personasCon25 = miArray.filter(persona => persona.edad === 25);
    let nombresCon25 = personasCon25.map(persona => persona.nombre);
    if(nombresCon25.length > 0){
        alert("Las personas con 25 años son: " + nombresCon25.join(", "));
    } else {
        alert("No hay personas con 25 años.");
    }
}

alert("PARA VER EL CONTENIDO DE LA PAGINA WEB DEBE SER MAYOR DE EDAD");
let anio= parseInt (prompt("En que año naciste?"));
if (anio <2002 && anio >1920){
    alert("Bienvenido al sitio web! Ahora ingrese los nombres y edades de las personas que van a consumir");
    promedioEdadVisitantes();
}
else{
    alert("Usd no es mayor de edad!, no puede ingresar al sitio web");
    window.location.replace("https://www.google.com");
}
