delete String.prototype.trim

function trim(string) {
    
}

console.log('CASE 1');

var greeting = '  Hello, World!  '
var trimed = trim(greeting)

console.log(trimed)
// 'Hello, World!'