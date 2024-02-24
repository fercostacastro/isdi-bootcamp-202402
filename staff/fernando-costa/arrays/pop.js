delete Array.prototype.pop

function pop(array) {

  if (array.length > 0) {

    var lastIndex = array.length - 1
    var lastElement = array[lastIndex]

    array.length--

    return lastElement
  }
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]
var num = pop(nums)

console.assert(num)
// 500
console.assert(nums.length)
// 4
console.assert(nums)
// [100, 200, 300, 400]

console.assert(nums[0] === 100, '100')
console.assert(nums[1] === 200, '200')
console.assert(nums[2] === 300, '300')
console.assert(nums[3] === 400, '400')
console.assert(nums.length === 4, 4)


console.log('CASE 2')

var animals = ['pigs', 'goats', 'sheep', 'cows']
var animal = pop(animals)

console.assert(animal)
// 'cows'
console.assert(animals.length)
// 3
console.assert(animals)
// ['pigs', 'goats', 'sheep']

console.assert(animals[0] === 'pigs', 'pigs')
console.assert(animals[1] === 'goats', 'goats')
console.assert(animals[2] === 'sheep', 'sheep')
console.assert(animals.length === 3, 3)


console.log('CASE 3')

var sports = ['soccer', 'baseball']
var sport = pop(sports)

console.assert(sport)
// 'baseball'
console.assert(sports.length)
// 1
console.assert(sports)
// ['soccer']

console.assert(sports[0] === 'soccer', 'soccer')
console.assert(sports.length === 1, 1)


console.log('CASE 4')

var sports = []
var sport = pop(sports)

console.assert(sport === undefined)
// undefined

console.assert(sports.length === 0)
// 0

console.assert(sports)
// []
console.assert(sports[0] === undefined)