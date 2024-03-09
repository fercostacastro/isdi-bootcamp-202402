delete String.prototype.at;

function at(string, index) {
  // crear una variable auxiliar 'character' para el carácter a extraer
  // mirar el índice si es positivo o negativo, plantear dos flujos
  // en caso que el el índice sea positivo, extraer el caracter del string a partir del índice (pasándolo por corchetes), y asignarlo a la variable 'character.
  // en caso que el el índice sea negativo, calcular la posición del carácter a extraer restando a la longitud del string el valor del índice (pasando el resultado por corchetes), y asignarlo a la variable 'character.
  // retornar el valor de 'character'
  var character;

  if (index >= 0) {
    character = string[index];
  } else {
    var newIndex = string.length + index;

    character = string[newIndex];
  }

  return character
}

console.log('CASE 1')
var s = "hola mundo";
var char = at(s, 6);
console.log(char);
// 'u'

console.log('CASE 2')
var s = "hola mundo";
var char = at(s, 20);
console.log(char);
// undefined

// CASE 3
var s = "hola mundo";
var char = at(s, -4);
console.log(char);
// 'u'
