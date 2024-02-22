/**
 * Extracts an element that matches the condition from an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to extract a value.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */

function extract(object, callback) {
    var newObject = {}
    var extractedElement

    if (!(object instanceof Object)) {
        throw new TypeError(object + ' is not an Object')
    }
    for (let i = 0; i < object.length; i++) {

        if (callback(object[i]) === true) {
            newObject = object[i]
            extractedElement = i
        }

    }
    for (i = extractedElement; i < object.length; i++) {
        object[i] = object[i + 1]
    }
    object.length -= 1
    delete object[object.length]
    return newObject
}


console.log('CASE 1: extract user pepito form users')

var users = {
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Pepito', age: 50 },
    3: { name: 'Campa', age: 30 },
    4: { name: 'James', age: 40 },
    length: 5
}

var user = extract(users, function (user) {
    return user.name === 'Pepito'
})

console.log(user)
// { name: 'Pepito', age: 50 }

console.log(users)
/*
{
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Campa', age: 30 },
    3: { name: 'James', age: 40 },
    length: 4
}
*/

try {
    extract(10)
} catch (error) {
    console.log(error)
    // TypeError: 10 is not an Object
}

try {
    extract(user)
} catch (error) {
    console.log(error)
    // TypeError: 
    // 0: { name: 'Wendy', age: 19 },
    // 1: { name: 'Peter', age: 20 },
    // 2: { name: 'Campa', age: 30 },
    // 3: { name: 'James', age: 40 },
    // length: 4
}

try {
    extract(false)
} catch (error) {
    console.log(error)
    // TypeError: false is not an Object
}