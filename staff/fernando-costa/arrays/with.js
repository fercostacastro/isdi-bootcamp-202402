delete Array.prototype.with

function withh(array, index, value) {
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        newArray[newArray.length] = array[i]
    }
    newArray[index] = value

    return newArray
}

console.log('CASE 1')

var arr = [1, 2, 3, 4, 5]
var result = withh(arr, 2, 6)
// [1, 2, 6, 4, 5]