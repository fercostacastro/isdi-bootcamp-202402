delete Array.prototype.slice

function slice(array, start, end) {
    var length = array.length;

    if (start < 0) {
        start += length;
        if (start < 0) {
            start = 0
        }
    }

    if (end < 0) {
        end += length;
        if (end < 0) {
            end = 0
        }
    }

    var slicedArray = [];
    for (var i = start; i < end && i < length; i++) {
        slicedArray.push(array[i])
    }

    return slicedArray
}


console.log('CASE 1')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = slice(animals, 1, 5)

console.assert(result);
// ['bison', 'camel', 'duck', 'elephant']
console.assert(animals[0] === 'ant', 'ant')
console.assert(animals[1] === 'bison', 'bison')
console.assert(animals[2] === 'camel', 'camel')
console.assert(animals[3] === 'duck', 'duck')
console.assert(animals[4] === 'elephant', 'elephant')
console.assert(animals.length === 5, 5)

console.log('CASE 2')

var colors = ['blue', 'orange', 'red', 'pink', 'green']
var result = slice(colors, 2, 4)

console.assert(result)
// ['red', 'pink']
console.assert(colors[0] === 'blue', 'blue')
console.assert(colors[1] === 'orange', 'orange')
console.assert(colors[2] === 'red', 'red')
console.assert(colors[3] === 'pink', 'pink')
console.assert(colors[4] === 'green', 'green')
console.assert(colors.length === 5, 5)