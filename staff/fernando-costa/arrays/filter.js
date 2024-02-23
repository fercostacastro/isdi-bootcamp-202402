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


console.log('CASE 1')

var words = ['spray', 'elite', 'exuberant', 'destruction', 'present']
var result = filter(words, function (x) { return x.length > 6 })


console.assert(result[0] = 'exuberant', 'exuberant')
console.assert(result[1] = 'destruction', 'destruction')
console.assert(result[2] = 'present', 'present')
console.assert(result.length === 3, 3)

console.assert(words[0] === words[0], 0)
console.assert(words[1] === words[1], 1)
console.assert(words[2] === words[2], 2)
console.assert(words[3] === words[3], 3)
console.assert(words[4] === words[4], 4)
console.assert(words.length === words.length, 'length')
// ["exuberant", "destruction", "present"]

/*
console.log('CASE 2')

var numsCase2Filter = [20, 40, 60, 80, 100]
var result = filter(numsCase2Filter, function (x) { return x > 55})

console.assert(numsCase2Filter[0] = '20', '20')
console.assert(numsCase2Filter[1] = '40', '40')
console.assert(numsCase2Filter[2] = '60', '60')
console.assert(numsCase2Filter[3] = '80', '80')
console.assert(numsCase2Filter[4] = '100', '100')
console.assert(numsCase2Filter.length === 5, 5)
// ["60, "80", "100"]*/
