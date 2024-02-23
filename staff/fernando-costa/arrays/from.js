delete Array.prototype.from

function from(array, element) {

    let newArray = []

    if (element === undefined) {
        for (let i = 0; i < array.length; i++) {
            newArray[i] = array[i]
        }
        return newArray
    } else {
        for (let i = 0; i < array.length; i++) {
            newArray[i] = element(array[i])
        }
        return newArray
    }
}


console.log('CASE 1')

let student = 'Fernando'
let result = from(student)

console.assert(result)
// ['F', 'e' 'r' 'n' 'a' 'n' 'd' 'o']

console.assert(result[0] === student[0], 'F')
console.assert(result[1] === student[1], 'e')
console.assert(result[2] === student[2], 'r')
console.assert(result[3] === student[3], 'n')
console.assert(result[4] === student[4], 'a')
console.assert(result[5] === student[5], 'n')
console.assert(result[6] === student[6], 'd')
console.assert(result[7] === student[7], 'o')
console.assert(result.length === 8, '8')