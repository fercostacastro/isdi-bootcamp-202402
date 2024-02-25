delete Array.prototype.slice

function slice(index, end, start){

}


console.log('CASE 1')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = slice(animals, 1, 5)

console.log(result);
// ["bison", "camel", "duck", "elephant"]