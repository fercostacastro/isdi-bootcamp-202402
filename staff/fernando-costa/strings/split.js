delete String.prototype.split;

function split(string, separator) {
    debugger
  var resultArray = [];
  var char = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] === separator) {
      resultArray[resultArray.length] = char;
      char = ",";
    } else {
      char = char + string[i];
    }
    resultArray[resultArray.length] = char;
  }
  return resultArray;
}

console.log('CASE 1')
var s = "hola mundo";
var words = split(s, " ");
console.log(words);
// ['hola', 'mundo']
