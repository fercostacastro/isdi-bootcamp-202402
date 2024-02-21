/**
 * Adds an element in an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param value - The value to add.
 * 
 * @throws {TypeError} When object is not an object.
 */

function add(object, value) {
    if (arguments.length === 1)  {
        return object.length

    } else if (!(object instanceof Object)) {
        throw new TypeError(object + ' is not an Object')

    } else {
        object[object.length] = value
        object.length++
    
        return object.length
    }
}

console.log('CASE 1: add violet in colors')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = add(colors, 'violet')

console.log(length)
// 4

console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'violet',
    length: 4
}
*/

try {
    add(23, 23)
} catch (error) {
    console.log(error)
    // TypeError: 23 is not an Object
}

try {
    add(true, 'string')
} catch (error) {
    console.log(error)
    // TypeError: true is not an Object
}

try {
    add('series', 'movies')
} catch (error) {
    console.log(error)
    // TypeError: string is not an Object
}