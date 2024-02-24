delete Array.prototype.indexOf

function lastIndexOf(array, searchElement){
    for (var i = array.length - 1; i >= 0; i--) {

        if (array[i -1] === searchElement){
            return i
        }
    }

    return -1
}


console.log('CASE 1')

var animals = ['dog', 'cat', 'rabbit', 'mouse', 'piggeon']
var index = lastIndexOf(animals, 'mouse')

console.log(index)
