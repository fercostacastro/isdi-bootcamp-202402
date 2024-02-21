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


var elements = ['Fire', 'Air', 'Water']

var result = join(elements)

console.log(result)
// "Fire,Air,Water"

var result2 = join(elements, ' ')
console.log(result2);
// "Fire Air Water"

var result3 = join(elements, '-')
console.log(result3);
// "Fire-Air-Water"