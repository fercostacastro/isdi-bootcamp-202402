delete String.prototype.endsWith

function endsWith(string, searchString) {
    
    var currentValue = "";
    for (var i = string.length - searchString.length; i < string.length; i++){
       currentValue = currentValue + string[i] 
       console.log(currentValue)
    }
    if(currentValue === searchString){
        return true
    } else {
        return false
    }
}

// CASE 1
var s = 'hola mundo'
var result = endsWith(s, 'ndo')
console.log(result)
// true

// CASE 2
var s = 'hola mundo'
var result = endsWith(s, 'dos')
console.log(result)
// false