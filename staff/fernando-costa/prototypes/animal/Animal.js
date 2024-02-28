function Animal(name, age, legs, weight, gender) {
    this.name = name
    this.age = age
    this.legs = legs
    this.weight = weight
    this.gender = gender
    this.sleeping = false
    this.eating = ''
    this.legsSpeed = Animal.NOT_WALK
    this.noise = ''
}

Animal.NOT_WALK = 0
Animal.WALK_VERY_SLOW = 1
Animal.WALK_SLOW = 2
Animal.WALK_NORMAL = 4
Animal.WALK_FAST = 5
Animal.RUN = 6

Animal.prototype.sleep = function () {
    this.sleeping = true
}

Animal.prototype.awake = function () {
    this.sleeping = false
}

Animal.prototype.eat = function (food) {
    if (this.eating) throw new Error('try to eat on sleeping')
    else if (typeof food !== 'string') throw new Error ('put a string')

    this.eating = food
}

Animal.prototype.moveLegs = function (speed) {
    this.legsSpeed = speed === undefined ? 4 : speed
}

Animal.prototype.makeNoise = function (someNoise) {
    this.noise = someNoise
}


module.exports = Animal