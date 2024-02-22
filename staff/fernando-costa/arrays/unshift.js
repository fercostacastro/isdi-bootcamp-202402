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

// CASE 1
var nums = [1, 2, 3];
var result = unshift(nums, 4, 5)

console.log(nums)
// [4, 5, 1, 2, 3]

console.log(result)
// 5