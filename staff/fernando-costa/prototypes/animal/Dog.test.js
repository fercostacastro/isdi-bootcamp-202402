var Dog = require('./Dog')
var assert = require('./assert')

console.log('TEST Dog')

console.log('CASE constructor')

var dog = new Dog('Lucy', 1, 4, 5, 'female')

assert.equalsValue(dog.name, 'Lucy')
assert.equalsValue(dog.age, 1)
assert.equalsValue(dog.legs, 4)
assert.equalsValue(dog.weight, 3)
assert.equalsValue(dog.gender, 'female')
assert.equalsValue(dog.noise, '')
assert.equalsValue(dog.sleeping, false)
assert.equalsValue(andogimal.legsSpeed, Dog.NOT_WALK)