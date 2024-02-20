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

console.log(result)
// ['F', 'e' 'r' 'n' 'a' 'n' 'd' 'o']
