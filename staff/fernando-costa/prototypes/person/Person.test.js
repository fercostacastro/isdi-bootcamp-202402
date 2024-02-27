var Person = require('./Person')

console.log('TEST Person')

var person = new Person('Lindovaldo', 'Soritulla', 'black', 170, 80, 2000, 'Spain')

console.assert(person.firstName === 'Lindovaldo', 'firstName is Lindovaldo')
console.assert(person.lastName === 'Soritulla', 'lastName is Soritulla')
console.assert(person.skinColor === 'black', 'skincolor is black')
console.assert(person.height === 170, 'height is 170cm')
console.assert(person.weight === 80, 'weight is 80kg')
console.assert(person.yearOfBirth === 2000, 'year of birth is 2001')
console.assert(person.place === 'Spain', 'place of birth is Spain')

console.log('CASE method height')

var person = new Person('Jonderlay', 'Forcino')

person.year = 0

person.age(24)

console.assert(person.yearsGrowUp === 24, 'age is 24')
