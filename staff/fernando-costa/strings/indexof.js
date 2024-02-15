delete String.prototype.indexOf;

function indexOf(string, searchString) {
  debugger
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

// CASE 1
var s = "hola mundo";
var index = indexOf(s, "ola");
console.log(index);
// 1

// CASE 2
var s = "hola mundo";
var index = indexOf(s, "olaf");
console.log(index);
// -1
