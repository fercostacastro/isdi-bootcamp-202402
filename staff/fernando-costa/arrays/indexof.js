delete Array.prototype.indexOf;

function indexOf(array, searchElement) {
  debugger;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

// CASE 1
var animals = ['dog', 'cat', 'rabbit', 'mouse', 'piggeon']
var index = indexOf(animals, 'rabbit');
console.log(index);
