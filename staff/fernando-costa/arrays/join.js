delete Array.prototype.join

function join(array, separator) {

    var resultString = ''

    if (separator === undefined) {
        separator = ','

        for (var i = 0; i < array.length; i++) {

            if (i === array.length - 1) {
                // var string = array[i]
                resultString = resultString + array[i]
            } else {
                // var string = array[i] + separator
                resultString = resultString + array[i] + separator
            }
        }

    } else {
        for (var i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                // var string = array[i]
                resultString = resultString + array[i]
            } else {
                // var string = array[i] + separator
                resultString = resultString + array[i] + separator
            }
        }
    }

    return resultString
}


console.log('CASE 1')

var elements = ['Fire', 'Air', 'Water']

var result = join(elements)

console.assert(result === 'Fire,Air,Water')
// 'Fire,Air,Water'


console.log('CASE 2')

var result2 = join(elements, ' ')
console.assert(result2 === 'Fire Air Water')
// 'Fire Air Water'


console.log('CASE 3')

var result3 = join(elements, '-')
console.assert(result3 === 'Fire-Air-Water')
// 'Fire-Air-Water'