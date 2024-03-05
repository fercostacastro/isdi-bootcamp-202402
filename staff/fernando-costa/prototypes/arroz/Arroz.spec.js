const matcha = require('./matcha')

const Arroz = require('./Arroz')

matcha.describe('Arroz', () => {
    matcha.describe('> constructor', () => {
        matcha.it('should construct', () => {
            const a = new Arroz

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(0)
        })

        matcha.it('should construct with multiple values', () => {
            const a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(3)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should construct with one non-numeric value', () => {
            const a = new Arroz(true)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(1)
            matcha.expect(a[0]).toBe(true)
        })

        matcha.it('should construct with one numeric value', () => {
            const a = new Arroz(5)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(5)
            for (let i = 0; i < a.length; i++)
                matcha.expect(a[i]).toBe(undefined)
        })
    })

    matcha.describe('> push', () => {
        matcha.it('should push a value', () => {
            const a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            const length = a.push(40)

            matcha.expect(a.length).toBe(4)
            matcha.expect(a[a.length - 1]).toBe(40)
            matcha.expect(length).toBe(4)
        })

        matcha.it('should push many values', () => {
            const a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            const length = a.push(40, 50, 60, 70)

            matcha.expect(a.length).toBe(7)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)
            matcha.expect(a[5]).toBe(60)
            matcha.expect(a[6]).toBe(70)
            matcha.expect(length).toBe(7)
        })
    })

    matcha.describe('> pop', () => {
        matcha.it('should extract last value', () => {
            const a = new Arroz(10, 20, 30)

            matcha.expect(!!a.pop).toBe(true)

            const value = a.pop()

            matcha.expect(a.length).toBe(2)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(undefined)
            matcha.expect(value).toBe(30)
        })
    })

    matcha.describe('> toString', () => {
        matcha.it('should convert to string', () => {
            const a = new Arroz(10, 20, 30, 40, 50)

            matcha.expect(!!a.toString).toBe(true)

            const string = a.toString()

            matcha.expect(string).toBe('Arroz [10, 20, 30, 40, 50]')
        })
    })

    matcha.describe('> forEach', () => {
        matcha.it('should iterate on each element', () => {
            const a = new Arroz(10, 20, 30, 40, 50, 60)
            const b = new Arroz

            a.forEach(function (element, index, arroz) {
                b[index] = { item: element, iterable: arroz }
                b.length++
            })

            matcha.expect(a.length).toBe(6)

            for (let i = 0; i < a.length; i++)
                matcha.expect(a[i]).toBe(10 * (i + 1))

            matcha.expect(b.length).toBe(a.length)

            for (let i = 0; i < b.length; i++) {
                const element = b[i]

                matcha.expect(element.item).toBe((10 * (i + 1)))
                matcha.expect(element.iterable).toBe(a)
            }
        })
    })

    matcha.describe('> find', () => {
        matcha.it('should find a product in cart', () => {
            const cart = new Arroz({ brand: 'adidas', model: 'cool socks', price: 16 }, { brand: 'nike', model: 'air max', price: 120 }, { brand: 'puma', model: 'dangerous glasses', price: 30 })

            let i = 0

            let item = cart.find(function (element, index, arroz) {
                matcha.expect(index).toBe(i++)
                matcha.expect(arroz).toBe(cart)

                return element.price === 120
            })

            matcha.expect(item.brand).toBe('nike')
            matcha.expect(item.model).toBe('air max')
            matcha.expect(item.price).toBe(120)
        })

        matcha.it('should not find a product that is not in cart', () => {
            const cart = new Arroz({ brand: 'adidas', model: 'cool socks', price: 16 }, { brand: 'nike', model: 'air max', price: 120 }, { brand: 'puma', model: 'dangerous glasses', price: 30 })

            let i = 0

            let item = cart.find(function (element, index, arroz) {
                matcha.expect(index).toBe(i++)
                matcha.expect(arroz).toBe(cart)

                return element.price === 500
            })

            matcha.expect(item).toBe(undefined)
        })
    })

    matcha.describe('> map', () => {
        matcha.it('should map numbers to power of 2', () => {
            const nums = new Arroz(10, 20, 30)

            let i = 0

            const numsPow2 = nums.map(function (element, index, arroz) {
                matcha.expect(index).toBe(i++)
                matcha.expect(arroz).toBe(nums)
                matcha.expect(element).toBe(10 * (index + 1))

                return element ** 2
            })

            matcha.expect(nums.length).toBe(3)

            for (let i = 0; i < nums.length; i++) {
                matcha.expect(nums[i]).toBe(10 * (i + 1))
            }

            matcha.expect(numsPow2.length).toBe(nums.length)

            for (let i = 0; i < numsPow2.length; i++) {
                matcha.expect(numsPow2[i]).toBe((10 * (i + 1)) ** 2)
            }
        })
    })

    matcha.describe('> from', () => {
        matcha.it('should create an instance of Arroz from numbers', () => {
            const nums = new Arroz(10, 20, 30)
            const nums2 = Arroz.from(nums)

            matcha.expect(nums.length).toBe(3)

            for (let i = 0; i < nums.length; i++) {
                matcha.expect(nums[i]).toBe(10 * (i + 1))
            }

            matcha.expect(nums === nums2).toBe(false)
            // N2H
            //matcha.expect(nums).not.toBe(nums2) 

            matcha.expect(nums2.length).toBe(nums.length)

            for (let i = 0; i < nums2.length; i++) {
                matcha.expect(nums2[i]).toBe(10 * (i + 1))
            }
        })
    })
})