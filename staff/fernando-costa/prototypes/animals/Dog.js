var Pet = require('./Pet')

function Dog(owner, name, birthdate, country, weight, race) {
    Pet.call(this, owner, name, birthdate, country, weight)

    this.barking = false
    this.race = race
}

Dog.prototype = Object.create(Pet.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
    this.barking = true
}

Dog.prototype.tsssh = function () {
    this.barking = false
}

Dog.prototype.eating = function () {
    this.eating = 'meat'
}

Dog.prototype.sleeping = function () {
    this.sleeping = false
}

Dog.prototype.moveLegs = function (speed) {
    this.legsSpeed = speed === undefined ? 4 : speed
}

Dog.prototype.moveLegs = function (speed) {
    this.legsSpeed = speed === undefined ? 6 : speed
}

Dog.prototype.toString = function () {
    return Dog.name + ' (' + this.name + ')'
}

Dog.prototype.race = function (race) {
    this.race = race 
}

module.exports = Dog