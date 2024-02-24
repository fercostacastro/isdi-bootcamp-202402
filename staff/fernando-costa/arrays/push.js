delete Array.prototype.push

function push(array, ...element1) {
    debugger
    var item
    for( var i = 0; i < element1.length; i++){
        item = array.length
        array[item] = element1[i]
    }

    return array.length
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]
var length = push(nums, 600)

console.assert(length)
// 6
console.assert(nums)
// [100, 200, 300, 400, 500, 600]

console.assert(nums[0] === 100, '100')
console.assert(nums[1] === 200, '200')
console.assert(nums[2] === 300, '300')
console.assert(nums[3] === 400, '400')
console.assert(nums[4] === 500, '500')
console.assert(nums[5] === 600, '600')
console.assert(nums.length === 6, 6)


console.log('CASE 2')

var animals = ['pigs', 'goats', 'sheep']
var length = push(animals, 'cows')

console.assert(length)
// 4
console.assert(animals)
// ['pigs', 'goats', 'sheep', 'cows'] 

console.assert(animals[0] === 'pigs', 'pigs')
console.assert(animals[1] === 'goats', 'goats')
console.assert(animals[2] === 'sheep', 'sheep')
console.assert(animals[3] === 'cows', 'cows')
console.assert(animals.length === 4, 4)


console.log('CASE 3')

var sports = ['soccer', 'baseball']
var length = push(sports)

console.assert(length);
// 2
console.assert(sports);
// ['soccer', 'baseball']

console.assert(sports[0] === 'soccer', 'soccer')
console.assert(sports[1] === 'baseball', 'baseball')
console.assert(sports.length === 2, 2)



console.log('CASE 4')

var sports = ['soccer', 'baseball']
var length = push(sports, undefined)

console.assert(length);
//3
console.assert(sports);
// ['soccer', 'baseball', undefined]

console.assert(sports[0] === 'soccer', 'soccer')
console.assert(sports[1] === 'baseball', 'baseball')
console.assert(sports[2] === undefined, 'undefined')
console.assert(sports.length === 3, 3)