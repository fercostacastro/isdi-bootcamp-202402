function Car(brand, model) {
    this.brand = brand
    this.model = model
    this.status = 'off'
    this.deposit = 0
    this.year = year
    this.color = color
    this.doors = doors
    this.fuelType = fuelType
    this.transmission = transmission
    this.gears = gears
    this.gear = gear
    this.speed = speed
    this.acceleration = acceleration
    this.direction = direction
    this.testing = testing
}

Car.prototype.fuel = function (load) {
    this.deposit = load

    if (typeof load !== 'number')
        throw new TypeError(load + ' is not a number')
    else if (load < 0 || load > 100)
        throw new TypeError(load + ' out of range')
}

Car.prototype.start = function () {
    this.status = 'on'
}

Car.prototype.stop = function () {
    this.status = 'off'
}

Car.prototype.changeGear = function (gear) {
    this.gear = gear

    if (typeof gear !== 'number')
        throw new TypeError(gear + ' is not a number')
    else if (gear < 0 || gear > 4) {
        throw new TypeError(gear + ' is out of range')
    }
}

Car.prototype.speedUp = function (speed) {
    this.speedUp

    if (this.gear > 0)
        this.direction = 'forward'

    else if (this.gear === 0)
        this.direction = ''

    else
        this.direction = 'backward'
}

Car.prototype.turnSteering = function (wheelTurn) {
    this.turnSteering = wheelTurn

    if (this.turnSteering > 0 && this.gear > 0) this.direction = 'forward-right'

    if (this.turnSteering < 0 && this.gear > 0)
        this.direction = 'forward-left'

    if (this.turnSteering > 0 && this.gear === -1)
        this.direction = 'backfowrd-right'

    if (this.turnSteering < 0 && this.gear === -1)
        this.direction = 'backward-left'
}

module.exports = Car