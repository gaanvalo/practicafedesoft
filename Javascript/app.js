alert('es una prueba');

var numero1 = 3;
var numero2 = 5;
// Se suman los números y se muestra el resultado
resultado = numero1 + numero2;
document.getElementById("demo").innerHTML = resultado;

suma_y_muestra();
function suma_y_muestra() {
  resultado = numero1 + numero2;
  alert("El resultado es " + resultado);
}

var nombre1 = "Gabriel";
var nombre2 = "Antonio";
suma_y_muestra2(nombre1,nombre2);

function suma_y_muestra2(primerNumero, segundoNumero) { 
  var resultado2 = primerNumero + segundoNumero;
  document.getElementById("mensaje").innerHTML = "Es una prueba de concepto: " + resultado2;
}

// Definición de la función
function calculaPrecioTotal1(precio) {
  var impuestos = 1.16;
  var gastosEnvio = 10;
  var precioTotal = ( precio * impuestos ) + gastosEnvio;
   document.getElementById("mensaje2").innerHTML = "Total precio: " + precioTotal;
}
 
// Llamada a la función
calculaPrecioTotal1(23.34);

function calculaPrecioTotal(precio, porcentajeImpuestos) {
  var gastosEnvio = 10;
  var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
  var precioTotal = precioConImpuestos + gastosEnvio;
  return precioTotal;
}
 
var precioTotal = calculaPrecioTotal(23.34, 16);
var otroPrecioTotal = calculaPrecioTotal(15.20, 4);

document.getElementById("precioTotal").innerHTML = "calculaPrecioTotal: " + precioTotal;
document.getElementById("otroPrecioTotal").innerHTML = "calculaPrecioTotal otro: " + otroPrecioTotal;




