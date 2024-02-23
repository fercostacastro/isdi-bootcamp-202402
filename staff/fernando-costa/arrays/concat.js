delete Array.prototype.concat

function concat() {
  var newArray = []

  for (var i = 0; i < arguments.length; i++) {
    var argument = arguments[i]

    if (argument instanceof Array)

      for (var j = 0; j < argument.length; j++) {
        var element = argument[j]

        newArray[newArray.length] = element
      }

    else newArray[newArray.length] = argument

  }

  return newArray
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]
var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = concat(nums, animals)

//console.log(result.length)
// 9
//console.log(result)
// [100, 200, 300, 400, 500, 'pigs', 'goats', 'sheep', 'cows']

console.assert(result[0] === 100, 100)
console.assert(result[1] === 200, 200) 
console.assert(result[2] === 300, 300) 
console.assert(result[3] === 400, 400) 
console.assert(result[4] === 500, 500) 
console.assert(result[5] === 'pigs', 'pigs') 
console.assert(result[6] === 'goats', 'goats') 
console.assert(result[7] === 'sheep', 'sheep') 
console.assert(result[8] === 'cows', 'cows')


console.log('CASE 2')

var nums = []
var animals = []

var result = concat(nums, animals)

//console.log(result.length)
// 0
//console.log(result)
// []
console.assert(result = [])


console.log('CASE 3')

var animals = ['pigs', 'goats', 'sheep', 'cows']
var fruits = ['apples', 'bananas', 'oranges', 'lemons']
var cars = ['lambo', 'ferra', 'merce', 'porsc']

var result = concat(animals, fruits, cars)

//console.log(result)
// ['pigs', 'goats', 'sheep', 'cows', 'apples', 'bananas', 'oranges', 'lemons', 'lambo', 'ferra', 'merce', 'porsc']

console.assert(result[0] === 'pigs', 'pigs') 
console.assert(result[1] === 'goats', 'goats') 
console.assert(result[2] === 'sheep', 'sheep') 
console.assert(result[3] === 'cows', 'cows')
console.assert(result[4] === 'apples', 'apples')
console.assert(result[5] === 'bananas', 'bananas') 
console.assert(result[6] === 'oranges', 'oranges') 
console.assert(result[7] === 'lemons', 'lemons') 
console.assert(result[8] === 'lambo', 'lambo')
console.assert(result[9] === 'ferra', 'ferra')
console.assert(result[10] === 'merce', 'merce')
console.assert(result[11] === 'porsc', 'porsc')

/*
console.log('CASE 4')

var nums = [100, 200, 300, 400, 500]
var animals = ['pigs', 'goats', 'sheep', 'cows']
var fruits = ['apples', 'bananas', 'oranges', 'lemons']
var cars = ['lambo', 'ferra', 'merce', 'porsc']

var result = concat(nums, animals, fruits, cars, true, 'hola mundo', undefined, { name: 'Pepito' }, function fun() { }, 123, -10)

console.assert(result.length === 24)
// 24
console.assert(result)
// [100, 200, 300, 400, 500, 'pigs', 'goats', 'sheep', 'cows', 'apples', 'bananas', 'oranges', 'lemons', 'lambo', 'ferra', 'merce', 'porsc', true, 'hola mundo', undefined, {…}, ƒ, 123, -10]
*/