function palindromo(cadena) {
 var caracteresAceptados = /[^A-Za-z0-9]/g;
 cadena = cadena.toLowerCase().replace(caracteresAceptados, '');
 var lon = cadena.length;
 for (let i = 0; i < lon/2; i++) {
   if (cadena[i] !== cadena[lon - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindromo("eye9909eye");
function mostrar() {
 let x = $("#input").val();
 let resultado = palindromo(x);
 if(!resultado){
 $("#input").removeClass("true");
$("#input").addClass("false");
$("#mensaje").html("No es un palíndromo");
 } else {
 $("#input").removeClass("false");
 $("#input").addClass("true");
 $("#mensaje").html("Es un palíndromo");
 }
}