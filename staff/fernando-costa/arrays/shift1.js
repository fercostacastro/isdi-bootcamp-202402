delete Array.prototype.shift

function shift(array) {
    var first = array[0]

    array[0] = array[1]
    array[1] = array[2]

    array.length--

    return first
}

// CASE 1

var numsCase1 = [10, 20, 30]

var firstElementCase1 = shift(numsCase1)
// { 0: 10, 1: 20, 2: 30, length: 3 }
// { 0: 10, 1: 20, 2: 30, length: 3 } -> var first = 10
// { 0: 20, 1: 20, 2: 30, length: 3 }
// { 0: 20, 1: 30, 2: 30, length: 3 }
// { 0: 20, 1: 30, length: 2 } -> array.length--
// return first
// { 0: 20, 1: 30, length: 2 }

console.log(numsCase1)
// [20, 30]

console.log(firstElementCase1)
// 10