delete Array.prototype.findIndex

function findIndex(array, callback) {
    for (var i = 0; i < array.length; i++) {

        if (callback(array[i]))
            return i;
        
    }
    return undefined
}


console.log('CASE 1')

var nums = [10, 20, 30, 40, 50]
var result = findIndex(nums, (element) => element > 40)

console.log(result)


console.log('CASE 2')

var nums = [9, 25, 30, 10, 54]
var result = findIndex(nums, (element) => element > 10)

console.log(result)