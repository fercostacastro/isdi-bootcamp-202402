delete Array.prototype.forEach

function forEach(array, callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i, array)
    }
}


console.log('CASE 1: copy nums [10, 20, 30, 40, 50] into other')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num) {
    other[other.length] = num
})
// 10
// 20
// 30
// 40
// 50
// 50

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)

console.assert(other[0] === nums[0], 0)
console.assert(other[1] === nums[1], 1)
console.assert(other[2] === nums[2], 2)
console.assert(other[3] === nums[3], 3)
console.assert(other[4] === nums[4], 4)
console.assert(other.length === nums.length, 'length')


console.log('CASE 2: sum all numbers in the array')

var nums = [10, 20, 30, 40, 50]
var sum = 0
var other = []

forEach(nums, function (num) {
    other = (sum += num)
})

// console.log(other)

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)

console.assert(other === 150, '150')
// 150


console.log('CASE 3: sum the index to number')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num, index) {
    other[other.length] = num + index
})

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)


console.assert(other[0] === 10, 10)
console.assert(other[1] === 21, 21)
console.assert(other[2] === 32, 32)
console.assert(other[3] === 43, 43)
console.assert(other[4] === 54, 54)
console.assert(other.length === nums.length, 'length')


console.log('CASE 4: sum the number plus index + the arrays lenght')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num, index, array) {
    other[other.length] = num + index + array.length
})
// 15
// 26
// 37
// 48
// 59

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)

console.assert(other[0] === 15, 15)
console.assert(other[1] === 26, 26)
console.assert(other[2] === 37, 37)
console.assert(other[3] === 48, 48)
console.assert(other[4] === 59, 59)
console.assert(other.length === nums.length, 'length')