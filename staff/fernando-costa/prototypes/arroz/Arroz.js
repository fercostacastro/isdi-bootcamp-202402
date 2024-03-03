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


module.exports = Arroz