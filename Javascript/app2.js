var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado3 = "";
 
for(i in letras) {
  if(letras[i] == 'c') {
    break;
  }
  else {
    resultado3 += letras[i];
  }
}
alert(resultado3);
// muestra "En un lugar de la Mancha de"

//for
var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado4 = "";
 
for(i in letras) {
  if(letras[i] == 'a') {
    continue;
  }
  else {
    resultado4 += letras[i];
  }
}
alert(resultado4);
// muestra "En un lugr de l Mnch de cuyo nombre no quiero cordrme..."

