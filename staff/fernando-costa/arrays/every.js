delete Array.prototype.every

function every(array, callback) {
    for (i = 0; i < array.length; i++) {
        if (callback(array[i]) === false) {
            return false
        }
    }
    return true
}


// CASE 1

var numsCase1Every = [1, 30, 39, 29, 10, 13]
var result1 = every(numsCase1Every, function (x) {return  x < 40 })

console.log(result1)
// true


// CASE 2

var numsCase2Every = [2, 30, 41, 39, 50, 14]
var result2 = every(numsCase2Every, function (x) {return x < 40 })

console.log(result2)
// false