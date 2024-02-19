delete Array.prototype.map

function map(array, callback) {
    var newArray = []

    if (array.length === 4) {
        var element = array[0]
        var mappedElement = callback(element)
        newArray[0] = mappedElement

        var element = array[1]
        var mappedElement = callback(element)
        newArray[1] = mappedElement

        var element = array[2]
        var mappedElement = callback(element)
        newArray[2] = mappedElement

        var element = array[3]
        var mappedElement = callback(element)
        newArray[3] = mappedElement
    } else if (array.length === 5) {
        var element = array[0]
        var mappedElement = callback(element)
        newArray[0] = mappedElement

        var element = array[1]
        var mappedElement = callback(element)
        newArray[1] = mappedElement

        var element = array[2]
        var mappedElement = callback(element)
        newArray[2] = mappedElement

        var element = array[3]
        var mappedElement = callback(element)
        newArray[3] = mappedElement

        var element = array[4]
        var mappedElement = callback(element)
        newArray[4] = mappedElement
    }

    return newArray
}

console.log('CASE 1')

var nums = [1, 4, 9, 16]

var numsX2 = map(nums, function (x) { return x * 2 })
// array // Array { 0: 1, 1: 4, 2: 9, 3: 16, length: 4 }
// callback // function(x) { return x * 2 }

// var newArray = [] // Array { length: 0 }

// var element = array[0] // 1
// var mappedElement = callback(element) // 2
// newArray[0] = mappedElement // Array { 0: 2, length: 1 }

// var element = array[1] // 4
// var mappedElement = callback(element) // 8
// newArray[1] = mappedElement // Array { 0: 2, 1: 8, length: 2 }

// var element = array[2] // 9
// var mappedElement = callback(element) // 18
// newArray[2] = mappedElement // Array { 0: 2, 1: 8, 2: 18, length: 3 }

// var element = array[3] // 16
// var mappedElement = callback(element) // 32
// newArray[3] = mappedElement // Array { 0: 2, 1: 8, 2: 18, 3: 32, length: 4 }

// return newArray

console.log(numsX2)
// [2, 8, 18, 32]

console.log(nums)
// [1, 4, 9, 18]


console.log('CASE 2')

var nums = [10, 20, 30, 40, 50]

var numsX100 = map(nums, function (num) {
    return num * 100
})

console.log(numsX100)
// [1000, 2000, 3000, 4000, 5000]
console.log(nums)
// [10, 20, 30, 40, 50]


console.log('CASE 3')

var chars = ['a', 'b', 'c']

var charsInUpper = map(chars, function (char) {
    return char.toUpperCase()
})

console.log(charsInUpper)
// ['A', 'B', 'C']
console.log(chars)
// ['a', 'b', 'c']