delete Array.prototype.indexOf

function indexOf(array, searchElement) {
  debugger;
  for (var i = 0; i < array.length; i++) {

    if (array[i] === searchElement) {
      return i
    }
  }
  return -1
}


console.log('CASE 1')

var animals = ['dog', 'cat', 'rabbit', 'mouse', 'piggeon']
var index = indexOf(animals, 'rabbit')

console.assert(index === 2)
// 2

console.assert(animals[0] ==='dog', 'dog')
console.assert(animals[1] === 'cat', 'cat')
console.assert(animals[2] === 'rabbit', 'rabbit')
console.assert(animals[3] === 'mouse', 'mouse')
console.assert(animals[4] === 'piggeon', 'piggeon')
console.assert(animals.length === 5, 5)