module.exports = Dog
var Animal = require('./Animal')
Dog.prototype = new Animal()

function Dog() {

}


