delete String.prototype.indexOf;

function indexOf(string, searchString) {
  
  for (let i = 0; i < string.length - searchString.length + 1; i++) {
    let match = true;
    for (let j = 0; j < searchString.length; j++) {
      if (string[i + j] !== searchString[j]) {
        match = false;
      }
    }
    if (match) {
      return i;
    }
  }
  return -1;
}

console.log('CASE 1')
var s = "hola mundo";
var index = indexOf(s, "ola");
console.log(index);
// 1

console.log('CASE 2')
var s = "hola mundo";
var index = indexOf(s, "olaf");
console.log(index);
// -1