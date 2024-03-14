var o = { 0: 'Peter', 1: 'Wendy', 2: 'James', length: 3 }

Array.prototype.forEach.call(o, function (elem) {
console.log(elem) })
// Peter
// Wendy
// James

Array.prototype.forEach.apply(o, [function (elem) {
console.log(elem) }])
// Peter
// Wendy
// James