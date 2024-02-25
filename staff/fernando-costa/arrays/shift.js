delete Array.prototype.shift

function shift(array) {
    let first = array[0]

    // extraction indexes as reference
    //for (var i = 1; i < array.length; i++)
    //array[i - 1] = array[i]

    // machaking indexes as reference
    for (let i = 0; i < array.length - 1; i++)
        array[i] = array[i + 1]

    array.length--

    return first
}

console.log('CASE 1')

let nums = [10, 20, 30]

let firstElement = shift(nums)
// { 0: 10, 1: 20, 2: 30, length: 3 }
// { 0: 10, 1: 20, 2: 30, length: 3 } -> var first = 10
// { 0: 20, 1: 20, 2: 30, length: 3 }
// { 0: 20, 1: 30, 2: 30, length: 3 }
// { 0: 20, 1: 30, length: 2 } -> array.length--
// return first
// { 0: 20, 1: 30, length: 2 }

console.assert(nums)
// [20, 30]
console.assert(nums[0] === 20, 20)
console.assert(nums[1] === 30, 30)
console.assert(nums.length === 2, 2)

console.assert(firstElement === 10, 10)
// 10


console.log('CASE 2')

let animals = ['elephant', 'sheep', 'cow', 'dog']

firstElement = shift(animals)
// Array { 0: elephant, 1: sheep, 2: cow, 3: dog, length: 4 }
// var first = array[0] // elephant
// array[0] = array[1] // Array { 0: sheep, 1: sheep, 2: cow, 3: dog, length: 4 }
// array[1] = array[2] // Array { 0: sheep, 1: cow, 2: cow, 3: dog, length: 4 }
// array[2] = array[3] // Array { 0: sheep, 1: cow, 2: dog, 3: dog, length: 4 }
// array.length-- // Array { 0: sheep, 1: cow, 2: dog, length: 3 }
// return first

console.assert(animals)
// ['sheep', 'cow', 'dog']
console.assert(animals[0] === 'sheep', 'sheep')
console.assert(animals[1] === 'cow', 'cow')
console.assert(animals[2] === 'dog', 'dog')
console.assert(animals.length === 3, 3)

console.assert(firstElement === 'elephant', 'elephant')
// 'elephant'


console.log('CASE 3')

let cocktails = ['margharita', 'sex on the beach', 'bloody mary', 'gintonic', 'mojito', 'daikiri']

firstElement = shift(cocktails)
// array // Array { 0: 'margharita', 1: 'sex on the beach', 2: 'bloody mary', 3: 'gintonic', 4: 'mojito', 5: 'daikiri', length: 6 }
// var first = 'margharita'
// array[0] = array[1] // Array { 0: 'sex on the beach', 1: 'sex on the beach', 2: 'bloody mary', 3: 'gintonic', 4: 'mojito', 5: 'daikiri', length: 6 }
// array[1] = array[2] // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'bloody mary', 3: 'gintonic', 4: 'mojito', 5: 'daikiri', length: 6 }
// array[2] = array[3] // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'gintonic', 3: 'gintonic', 4: 'mojito', 5: 'daikiri', length: 6 }
// array[3] = array[4] // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'gintonic', 3: 'mojito', 4: 'mojito', 5: 'daikiri', length: 6 }
// array[4] = array[5] // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'gintonic', 3: 'mojito', 4: 'daikiri', 5: 'daikiri', length: 6 }
// array.length-- // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'gintonic', 3: 'mojito', 4: 'daikiri', length: 5 }
// return first

console.assert(cocktails)
// ['sex on the beach', 'bloody mary', 'gintonic', 'mojito', 'daikiri']
console.assert(cocktails[0] === 'sex on the beach', 'sex on the beach')
console.assert(cocktails[1] === 'bloody mary', 'bloody mary')
console.assert(cocktails[2] === 'gintonic', 'gintonic')
console.assert(cocktails[3] === 'mojito', 'mojito')
console.assert(cocktails[4] === 'daikiri', 'daikiri')
console.assert(cocktails.length === 5, 5)


console.assert(firstElement === 'margharita', 'margharita')
// 'margharita'


console.log('CASE 4')

let numsCase4 = [10, 20]

firstElement = shift(numsCase4)
// array // Array { 0: 10, 1: 20, length: 2 }
// var first = 10
// Array { 0: 20, 1: 20, length: 2 }
// array.length-- // Array {  0: 20, length: 1 }
// return first

console.assert(numsCase4)
// [20]
console.assert(numsCase4[0] === 20, 20)
console.assert(numsCase4.length === 1, 1)

console.assert(firstElement === 10)
// 10


console.log('CASE 5')

let numsCase5 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]

firstElement = shift(numsCase5)

console.assert(firstElement === 100, 100)
// 100

console.assert(numsCase5)
// [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]
console.assert(numsCase5[0] === 200, 200)
console.assert(numsCase5[1] === 300, 300)
console.assert(numsCase5[2] === 400, 400)
console.assert(numsCase5[3] === 500, 500)
console.assert(numsCase5[4] === 600, 600)
console.assert(numsCase5[5] === 700, 700)
console.assert(numsCase5[6] === 800, 800)
console.assert(numsCase5[7] === 900, 900)
console.assert(numsCase5[8] === 1000, 1000)
console.assert(numsCase5[9] === 1100, 1100)
console.assert(numsCase5[10] === 1200, 1200)
console.assert(numsCase5[11] === 1300, 1300)
console.assert(numsCase5[12] === 1400, 1400)
console.assert(numsCase5[13] === 1500, 1500)
console.assert(numsCase5[14] === 1600, 1600)
console.assert(numsCase5[15] === 1700, 1700)
console.assert(numsCase5[16] === 1800, 1800)
console.assert(numsCase5[17] === 1900, 1900)
console.assert(numsCase5[18] === 2000, 2000)
console.assert(numsCase5.length === 19, 19)