delete String.prototype.slice

function slice(string, indexStart, indexEnd) {
    var piece = ''

    if (indexStart < 0) {
        indexStart = string.length + indexStart
    }

    if (indexEnd === undefined || indexEnd === null) {
        indexEnd = string.length
    } else if (indexEnd < 0) {
        indexEnd = string.length + indexEnd
    }

    for (let i = indexStart; i < indexEnd; i++) {
        piece += string[i]
    }

    return piece
}

console.log('CASE 1')
var s = 'hola mundo'
var piece = slice(s, 5, 8)
console.log(piece)
// 'mun'


console.log('CASE 2')
var s = 'hola mundo'
var piece = slice(s, -3)
console.log(piece)
// 'ndo'