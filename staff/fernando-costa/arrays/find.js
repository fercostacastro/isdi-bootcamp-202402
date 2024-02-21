delete Array.find

function find(array, callback) {
    for (var i = 0; i < array.length; i++) {

        if (callback(array[i]))
            return array[i];
        
    }
    return undefined
}


console.log('CASE 1')

var nums = [10, 20, 30, 40, 50]
var result = find(nums, (element) => element > 10)

console.log(result)
