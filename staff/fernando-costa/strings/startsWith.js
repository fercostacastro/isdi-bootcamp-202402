delete String.prototype.startsWith

function startsWith(string, searchString) {
    
    if (searchString.length > string.length) {
        return false;
    }

    for (var i = 0; i < searchString.length; i++) {
        if (string[i] !== searchString[i]) {
            return false
        } else {
            return true
        }
    }
}
    console.log('CASE 1')
    var s = 'hola mundo'
    var result = startsWith(s, 'hol')
    console.log(result)
    // true


    console.log('CASE 2')
    var s = 'hola mundo'
    var result = startsWith(s, 'ola')
    console.log(result)
   // false