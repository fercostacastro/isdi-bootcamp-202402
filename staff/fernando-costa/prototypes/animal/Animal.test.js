var assert = require('./assert')

var Animal = require('./Animal')

console.log('TEST Animal')

console.log('CASE constructor')

var animal = new Animal('Buby', 5, 4, 10, 'male')

assert.equalsValue(animal.name, 'Buby')
assert.equalsValue(animal.age, 5)
assert.equalsValue(animal.legs, 4)
assert.equalsValue(animal.weight, 10)
assert.equalsValue(animal.gender, 'male')
assert.equalsValue(animal.noise, '')
assert.equalsValue(animal.sleeping, false)
assert.equalsValue(animal.legsSpeed, Animal.NOT_WALK)

console.log('CASE makeNoise')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.makeNoise('randomNoise')

assert.equalsValue(animal.noise, 'randomNoise')


console.log('CASE sleep')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.sleep()

assert.equalsValue(animal.sleeping, true)


console.log('CASE awake')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.sleeping = true

animal.awake()

assert.equalsValue(animal.sleeping, false)


console.log('CASE eat')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.eat('meat')

assert.equalsValue(animal.eating, 'meat')


console.log('CASE run')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.moveLegs(Animal.RUN)

assert.equalsValue(animal.legsSpeed, Animal.RUN)


console.log('CASE walk')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.moveLegs()

assert.equalsValue(animal.legsSpeed, Animal.WALK_NORMAL)


console.log('CASE walk fast')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.moveLegs(Animal.WALK_FAST)

assert.equalsValue(animal.legsSpeed, Animal.WALK_FAST)


console.log('CASE walk slow')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.moveLegs(Animal.WALK_SLOW)

assert.equalsValue(animal.legsSpeed, Animal.WALK_SLOW)


console.log('CASE walk normal')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.moveLegs(Animal.WALK_NORMAL)

assert.equalsValue(animal.legsSpeed, Animal.WALK_NORMAL)


console.log('CASE walk very slow')

var animal = new Animal('Boludito', 10, 2, 5, 'male')

animal.moveLegs(Animal.WALK_VERY_SLOW)

assert.equalsValue(animal.legsSpeed, Animal.WALK_VERY_SLOW)