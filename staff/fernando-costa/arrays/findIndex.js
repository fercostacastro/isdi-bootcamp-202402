delete Array.prototype.findIndex

function findIndex(array, callback) {
    for (var i = 0; i < array.length; i++) {

        if (callback(array[i]))
            return i;
    }
    return -1
}


console.log('CASE 1')

var nums = [5, 12, 8, 130, 44]
var result = findIndex(nums, function (element) { return element > 20 })

console.assert(result === 3, '3')

console.assert(nums[0] === 5, '5')
console.assert(nums[1] === 12, '12')
console.assert(nums[2] === 8, '8')
console.assert(nums[3] === 130, '130')
console.assert(nums[4] === 44, '44')
console.assert(nums.length === 5, '5')


console.log('CASE 2')

var nums = [9, 25, 30, 10, 54, 88]
var result = findIndex(nums, function (element) { return element > 10 })

console.assert(result === 1, '1')

console.assert(nums[0] === 9, '9')
console.assert(nums[1] === 25, '25')
console.assert(nums[2] === 30, '30')
console.assert(nums[3] === 10, '10')
console.assert(nums[4] === 54, '54')
console.assert(nums.length === 6, '6')