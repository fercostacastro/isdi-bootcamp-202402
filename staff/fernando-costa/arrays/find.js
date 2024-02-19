delete Array.find

function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var firstElement = array[i];

        if (callback(firstElement)) {
            return firstElement;
        }
    }
}

console.log('CASE 1')

var nums = [10, 20, 30, 40, 50];

var result = find(function (num) {
    return num === nums[1];
});

console.log(nums[1]);
