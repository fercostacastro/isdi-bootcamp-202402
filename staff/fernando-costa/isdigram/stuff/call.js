function Person(name, surname) {
    this.name = name
    this.surname = surname
}

var peter = new Person('Peter', 'Pan')

console.log(peter)

var wendy = {}

Person.call(wendy, 'Wendy', 'Darling')

console.log(wendy)

// Person {name: 'Peter', surname: 'Pan'}
// {name: 'Wendy', surname: 'Darling'}