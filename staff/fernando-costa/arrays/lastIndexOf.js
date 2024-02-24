delete Array.prototype.lastIndexOf

function lastIndexOf(array, searchElement){
    for (var i = array.length - 1; i >= 0; i--) {

        if (array[i] === searchElement){
            return i
        }
    }

    return -1
}


console.log('CASE 1')

var animals = ['dog', 'cat', 'rabbit', 'mouse', 'piggeon']
var index = lastIndexOf(animals, 'mouse')

console.assert(index)
// 3

console.assert(animals[0] ==='dog', 'dog')
console.assert(animals[1] === 'cat', 'cat')
console.assert(animals[2] === 'rabbit', 'rabbit')
console.assert(animals[3] === 'mouse', 'mouse')
console.assert(animals[4] === 'piggeon', 'piggeon')
console.assert(animals.length === 5, 5)


console.log('CASE 2')

var nums = [20, 33, 101, 55, 89]
var index = lastIndexOf(nums, 200)

console.assert(index)
// -1

console.assert(nums[0] === 20, 20)
console.assert(nums[1] === 33, 33)
console.assert(nums[2] === 101, 101)
console.assert(nums[3] === 55, 55)
console.assert(nums[4] === 89, 89)
console.assert(nums.length === 5, 5)