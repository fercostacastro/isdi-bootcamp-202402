function Person(name, lastName, skinColor, height, year, place, profession) {
    this.name = firstName
    this.lastName = lastName
    this.skinColor = skinColor
    this.height = height
    this.weight = weight
    this.yearOfBirth = year
    this.growUp = age
    this.placeOfBirth = place
}

Person.prototype.height = function (height) {
    this.height = height

    if (typeof height !== 'number') {
        throw new TypeError (height + ' is not a number')
    } else if (height < 170 || height > 170 ) {
        throw new TypeError (height + ' is not the real one')
    } else {
        this.height = 170
    }
}

Person.prototype.weight = function (weight) {
    this.weight = weight

}

Person.prototype.year = function (year) {
    this.yearOfBirth = year
}

module.exports = Person