delete Array.prototype.some

function some(array, callback) {
    for (i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return true
        }
    }
    return false
}


console.log('CASE 1')

var numsCase1Some = [1, 30, 39, 29, 10, 13]
var result1 = some(numsCase1Some, function (x) {return  x < 40 })

console.assert(result1 === true)
// true


console.log('CASE 2')

var numsCase2Some = [51, 99, 39, 89, 50, 70]
var result2 = some(numsCase2Some, function (x) {return x < 40 })

console.assert(result2 === true)
// true


console.log('CASE 3')

var numsCase3Some = [51, 99, 80, 89, 50, 70]
var result3 = some(numsCase3Some, function (x) {return x < 40 })

console.assert(result3 === false)
// false