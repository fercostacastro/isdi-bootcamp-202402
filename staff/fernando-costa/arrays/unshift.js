delete Array.prototype.unshift

function unshift(array) {
    // Guardar la cantidad de argumentos a agregar
    var newArray = arguments.length - 1

    // Mover los elementos existentes para hacer espacio para los nuevos elementos
    for (var i = array.length - 1; i >= 0; i--) {
        array[i + newArray] = array[i]
    }

    // Insertar los nuevos elementos al principio del array
    for (var j = 1; j <= newArray; j++) {
        array[j - 1] = arguments[j]
    }

    // Devolver la nueva longitud del array
    return array.length
}

console.log('CASE 1')

var numsCase1Unshift = [1, 2, 3];
var result = unshift(numsCase1Unshift, 4, 5)

console.assert(numsCase1Unshift)
// [4, 5, 1, 2, 3]
console.assert(numsCase1Unshift[0] === 4, 4)
console.assert(numsCase1Unshift[1] === 5, 5)
console.assert(numsCase1Unshift[2] === 1, 1)
console.assert(numsCase1Unshift[3] === 2, 2)
console.assert(numsCase1Unshift[4] === 3, 3)
console.assert(numsCase1Unshift.length === 5, 5)