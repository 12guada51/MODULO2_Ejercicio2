//1.ARRAY VACIO
var numeros = [];
var numazar = [10, 30, 9, 4, 230, 23, 78, 16, 21, 43]
alert ("Los números ingresados aleatoriamente fueron "+numazar+"")

//2.ARRAY INGRESADO POR USUARIO
var string = prompt("Ingresa diferentes palabras separadas por una coma (,)");
var arregloString = string.split(",");
alert ("["+arregloString+"]");

//3.ORDENAR ELEMENTOS
var cadena1 = [10,40,30,20,15,5]
var cadenaOrden = cadena1.sort(function(a, b){return a - b});
var elementoMayor = Math.max(...cadena1);
var elementoMenor = Math.min(...cadena1);

alert("El arreglo ordenado de menor a mayor es: "+cadenaOrden+"")
alert("El elemento mayor de la matriz es: "+elementoMayor+"")
alert("El elemento menor de la matriz es: "+elementoMenor+"")