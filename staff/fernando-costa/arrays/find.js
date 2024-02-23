delete Array.find

function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        var matches = callback(elem)

        if (matches) {

            return elem
        }
    }
}


console.assert('CASE 1 : find first number greater than 20')

var nums = [5, 12, 8, 130, 44]

var result = find(nums, function (element) { return element > 20 })

console.assert(result === 130, '130')
// 130

console.assert(nums[0] === 5, '5')
console.assert(nums[1] === 12, '12')
console.assert(nums[2] === 8, '8')
console.assert(nums[3] === 130, '130')
console.assert(nums[4] === 44, '44')
console.assert(nums.length === 5, '5')
// [5, 12, 8, 130, 44] => no devuleve nada en consola porque está bien