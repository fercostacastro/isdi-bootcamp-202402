describe('Collection', function () {
    describe('constructor', function () {
        it('creates a collection', function () {
            var cars = new Collection('cars')

            expect(cars).toBeInstanceOf(Collection)
        })
    })

    describe('_generatedId', function () {
        it('generates a random id', function () {
            var cars = new Collection('cars')

            var id1 = cars._generatedId()

            expect(typeof id1).toBe('string')

            var id2 = cars._generatedId()

            expect(typeof id2).toBe('string')

            expect(id1 === id2).toBe(false)
        })
    })

    describe('_loadDocuments', function () {
        it('should load all documents', function () {
            var cars = new Collection('cars')

            var info = cars._loadDocuments()

            expect(info).toBeInstanceOf(Object)
            expect(info.length).toBe(0)
        })
    })

    describe('_saveDocuments', function () {
        it('should save the sent elenment in an obeject', function () {
            var cars = new Collection('cars')

            var car1 = { brand: 'seat', model: 'ibiza' }
            cars._saveDocuments(car1)
        })
    })
})