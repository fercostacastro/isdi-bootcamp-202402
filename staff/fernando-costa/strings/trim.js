delete String.prototype.trim

function trim(string) {
    var trimString = ''

    for (var i = 0; i < string.length; i++) {
        if (string[i] === '') {
            trimString += string
        }
    }

    return string
}

console.log('CASE 1');

var greeting = '  Hello, World!  '
var trimed = trim(greeting)

console.log(trimed)
// 'Hello, World!'