alert("PARA VER EL CONTENIDO DE LA PAGINA WEB DEBE SER MAYOR DE EDAD");

let anio
function mayoriaDeEdad(){
    anio= parseInt (prompt("En que año naciste?"));
    if (anio <2002 && anio >1920){
        alert("Bienvenido al sitio web!");
    }
    else{
        alert("Usd no es mayor de edad!, no puede ingresar al sitio web");
    }
}
mayoriaDeEdad();

let cont=0, nombre, edad, acumulador=0, promedio;
function promedioEdadVisitantes(){
    nombre=prompt("Ingrese su nombre");
while(nombre !=-1){
    cont=cont+1;
    edad=parseInt(prompt("Cuantos años tenes?"));
    acumulador=acumulador+edad
    nombre=prompt("Ingrese su nombre");
}
promedio= parseFloat (acumulador/cont);
alert("La cantidad de clientes que visitaron la pagina fue de, "+cont+ " y el promedio de edad de los visitantes fue de, "+promedio);
}
promedioEdadVisitantes ();
