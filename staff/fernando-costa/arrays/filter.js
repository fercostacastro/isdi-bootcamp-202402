delete Array.prototype.filter

function filter(array, callback) {

    var newArray = []

    for (i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}


// CASE 1
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present']
var result = filter(words, function (x) { return x.length > 6 })

console.log(result)
// ["exuberant", "destruction", "present"]


// CASE 2

var numsCase2Filter = [20, 40, 60, 80, 100]
var result = filter(numsCase2Filter, function (x) { return x > 55})

console.log(result)
// ["60, "80", "100"]
