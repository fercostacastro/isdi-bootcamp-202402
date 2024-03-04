function Arroz() {
    if (arguments.length !== 1) {
        this.length = arguments.length

        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            this[i] = argument
        }
    } else {
        var argument = arguments[0]

        if (typeof argument === 'number') {
            this.length = argument

            return
        }

        this[0] = argument
        this.length = 1
    }
}

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        this[this.length] = argument
        this.length++
    }

    return this.length
}

Arroz.prototype.pop = function () {
    var lastIndex = this.length - 1

    var last = this[lastIndex]

    delete this[lastIndex]

    this.length--

    return last
}

Arroz.prototype.toString = function () {
    var string = 'Arroz ['

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        string += element

        if (i < this.length - 1)
            string += ', '
    }

    string += ']'

    return string
}

Arroz.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var elem = this[i]

        callback(elem, i, this)
    }
}

Arroz.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var elem = this[i]

        var matches = callback(elem, i, this)

        if (matches) return elem
    }
}

Arroz.prototype.map = function (callback) {
    var mapped = new Arroz

    for (var i = 0; i < this.length; i++) {
        var elem = this[i]

        var mappedElement = callback(elem, i, this)

        mapped[mapped.length++] = mappedElement
    }

    return mapped
}

Arroz.from = function (arroz) {
    var instance = new Arroz

    for (var i = 0; i < arroz.length; i++) {
        var elem = arroz[i]

        instance[instance.length++] = elem
    }

    return instance
}

module.exports = Arroz

Arroz.prototype.shift = function () {
    var firstIndex = 0

    var first = this[firstIndex]

    delete this[firstIndex]

    this.length--

    return first
}

Arroz.prototype.unshift = function () {
    var array = this
    var argsLength = arguments.length

    for (var i = this.length - 1; i >= 0; i--) {
        this[i + argsLength] = array[i]
    }

    for (var j = 0; j < argsLength; j++) {
        this[j] = arguments[j]
    }

    return array.length + argsLength
}

Arroz.prototype.indexOf = function () {
    var searchElement

    for (var i = 0; i < this.length; i++) {

        if (this[i] === searchElement) {
            return i
        }
    }
    return -1
}

Arroz.prototype.lastIndexOf = function () {
    var searchElement

    for (var i = this.length - 1; i >= 0; i--) {

        if (this[i] === searchElement) {
            return i
        }
    }
    return -1
}

Arroz.prototype.at = function () {
    var index
    return this[index]
}

Arroz.prototype.includes = function (value) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (element === value)
            return true

    }
    return false
}

Arroz.prototype.concat = function () {
    var concatArroz = new Arroz()


    for (var i = 0; i < this.length; i++) {
        concatArroz[concatArroz.length] = this[i]
        concatArroz.length++
    }

    for (i = 0; i < arguments.length; i++) {
        var elem = arguments[i]

        if (elem instanceof Arroz) {

            for (var j = 0; j < elem.length; j++) {
                concatArroz[concatArroz.length] = elem[j]
                concatArroz.length++
            }
        } else {
            concatArroz[concatArroz.length] = elem[i]
            concatArroz.length++
        }
    }
    return concatArroz
}

Arroz.prototype.findIndex = function () {
    for (var i = 0; i < this.length; i++) {
        var elem = this[i]
        var callback

        var matches = callback(elem, i, this)

        if (matches) return elem
    }
    return -1
}

module.exports = Arroz