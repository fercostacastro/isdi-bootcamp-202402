delete Array.prototype.findIndex

function findIndex(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var firstElement = array[i];

        if (callback(firstElement)) {
            return i;
        }
    }
}


console.log('CASE 1')

var nums = [196, 202, 3014, 401, 55]

function findIndex(element, index, array) {
    return element > 202
}

console.log(nums.findIndex(findIndex))
// 3