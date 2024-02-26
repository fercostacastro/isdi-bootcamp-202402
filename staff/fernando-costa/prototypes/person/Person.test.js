var Person = require('./Person')

console.log('TEST Person')

var person = new Person('Nelson', 'Mandela', 'black', 170, 1918, 'SouthAfrica', 'politician')

console.assert(person.firstName === 'Nelson', 'firstName is Nelson')
console.assert(person.lastName === 'Mandela', 'lastName is Mandela')
console.assert(person.skinColor === 'black', 'skincolor is black')
console.assert(person.height === 'year', 'year of birth is 1918')
console.assert(person.place === 'SouthAfrica', 'place of birth is SouthAfrica')
console.assert(person.profession === 'politician', 'profession is politician')