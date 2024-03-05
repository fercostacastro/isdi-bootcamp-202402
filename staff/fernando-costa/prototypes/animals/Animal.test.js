const assert = require('./assert')

const Animal = require('./Animal')

console.log('TEST Animal')

console.log('CASE constructor')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 31, 16, 45), 'GB', 50)

    assert.instanceOf(sultan, Animal)
    assert.equalsValue(sultan.constructor, Animal)
    assert.equalsValue(sultan.name, 'Sultan')
    assert.instanceOf(sultan.birthdate, Date)
    assert.equalsValue(sultan.birthdate.getFullYear(), 2000)
    assert.equalsValue(sultan.birthdate.getMonth(), 0)
    assert.equalsValue(sultan.birthdate.getDate(), 31)
    assert.equalsValue(sultan.birthdate.getHours(), 16)
    assert.equalsValue(sultan.birthdate.getMinutes(), 45)
    assert.equalsValue(sultan.country, 'GB')
    assert.equalsValue(sultan.weight, 50)
    assert.equalsValue(sultan.sleeping, false)
    assert.equalsValue(sultan.eating, '')
    assert.equalsValue(sultan.legsSpeed, 0)
}

console.log('CASE sleep')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.sleep()

    assert.equalsValue(sultan.sleeping, true)
}

console.log('CASE awake')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.sleeping = true

    sultan.awake()

    assert.equalsValue(sultan.sleeping, false)
}

console.log('CASE eat')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.eat('🍌')

    assert.equalsValue(sultan.eating, '🍌')
}

console.log('CASE eat on sleeping (unhappy)')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.sleeping = true

    let errorThrown

    try {
        sultan.eat('🍌')
    } catch (error) {
        errorThrown = error
    }

    assert.error(errorThrown, 'Error', 'try to eat on sleeping')
}

console.log('CASE not walk')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.moveLegs(Animal.NOT_WALK)

    assert.equalsValue(sultan.legsSpeed, Animal.NOT_WALK)
}

console.log('CASE walk')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.moveLegs()

    assert.equalsValue(sultan.legsSpeed, Animal.WALK_NORMAL)
}

console.log('CASE walk fast')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.moveLegs(Animal.WALK_FAST)

    assert.equalsValue(sultan.legsSpeed, Animal.WALK_FAST)
}

console.log('CASE walk slow')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.moveLegs(Animal.WALK_SLOW)

    assert.equalsValue(sultan.legsSpeed, Animal.WALK_SLOW)
}

console.log('CASE walk normal')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.moveLegs(Animal.WALK_NORMAL)

    assert.equalsValue(sultan.legsSpeed, Animal.WALK_NORMAL)
}

console.log('CASE walk very slow')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.moveLegs(Animal.WALK_VERY_SLOW)

    assert.equalsValue(sultan.legsSpeed, Animal.WALK_VERY_SLOW)
}

console.log('CASE run')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    sultan.moveLegs(Animal.RUN)

    assert.equalsValue(sultan.legsSpeed, Animal.RUN)
}

console.log('CASE toString')
{
    const sultan = new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', 50)

    assert.equalsValue(sultan.toString(), 'Animal (Sultan)')
}

console.log('CASE constructor fails on non-string name')
{
    let errorThrown

    try {
        new Animal(undefined, new Date(2000, 0, 1, 16, 45), 'GB', 50)
    } catch (error) {
        errorThrown = error
    }

    assert.error(errorThrown, 'TypeError', 'name is not a string')
}

console.log('CASE constructor fails on non-Date birthdate')
{
    let errorThrown

    try {
        new Animal('Sultan', undefined, 'GB', 50)
    } catch (error) {
        errorThrown = error
    }

    assert.error(errorThrown, 'TypeError', 'birthdate is not a Date')
}

console.log('CASE constructor fails on non-string country')
{
    let errorThrown

    try {
        new Animal('Sultan', new Date(2000, 0, 1, 16, 45), undefined, 50)
    } catch (error) {
        errorThrown = error
    }

    assert.error(errorThrown, 'TypeError', 'country is not a string')
}

console.log('CASE constructor fails on non-number weight')
{
    let errorThrown

    try {
        new Animal('Sultan', new Date(2000, 0, 1, 16, 45), 'GB', undefined)
    } catch (error) {
        errorThrown = error
    }

    assert.error(errorThrown, 'TypeError', 'weight is not a number')
}