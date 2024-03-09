delete String.prototype.lastIndexOf

function lastIndexOf(string, searchString){
    for (var i = string.length - 1; i >= 0; i--) {

        if (string[i] === searchString){
            return i
        }
    }

    return -1
}

console.log('CASE 1')

var s = 'hola mundo'
var index = lastIndexOf(s, 'o')

console.log(index)
// 9


console.log('CASE 2')

var s = 'hola mundo'
var index = lastIndexOf(s, 'ol')

console.log(index)
// 1