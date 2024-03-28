import fs from 'fs'

import Collecction from './Collection.mjs'

import { expect } from 'chai'

describe('Collection', () => {
    describe('constructor', () => {
        it('creates a collection', () => {
            const cars = new Collecction('cars')

            expect(cars).to.be.instanceOf(Collecction)
        })
    })

    describe('> helpers', () => {
        describe('_generateId', () => {
            it('generates a random id', () => {
                const cars = new Collecction('cars')

                const id1 = cars._generateId()

                expect(typeof id1).to.equal('string')

                const id2 = cars._generateId()

                expect(typeof id2).to.equal('string')

                expect(id1 === id2).to.equal(false)
            })
        })

        describe('_loadDocuments', () => {
            it('loads empty array on new collection', done => {
                fs.writeFile('./data/cars.json', '[]', error => {
                    if (error) {
                        console.error(error)

                        return
                    }

                    const cars = new Collecction('cars')

                    cars._loadDocuments((error, documents) => {
                        if (error) {
                            console.error(error)

                            return
                        }

                        expect(error).to.be.null

                        expect(documents).to.be.instanceOf(Array)
                        expect(documents.length).to.be.equal(0)

                        done()
                    })
                })
            })

            it('loads data on non-empty collection', done => {
                fs.writeFile('./data/cars.json', '[{"brand":"porsche","model":"911"}, {"brand":"fiat","model":"500"}]', error => {
                    if (error) {
                        console.error(error)

                        return
                    }

                    const cars = new Collecction('cars')

                    cars._loadDocuments((error, documents) => {
                        if (error) {
                            console.error(error)

                            return
                        }

                        expect(error).to.be.null

                        expect(documents).to.be.instanceOf(Array)
                        expect(documents.length).to.be.equal(2)

                        let document = documents[0]
                        expect(document).to.be.instanceOf(Object)
                        expect(document.brand).to.equal('porsche')
                        expect(document.model).to.equal('911')

                        document = documents[1]
                        expect(document.brand).to.equal('fiat')
                        expect(document.model).to.equal('500')

                        done()
                    })
                })
            })
        })

        describe('_saveDocuments', () => {
            it('saves a collection', done => {
                fs.writeFile('./data/cars.json', '[]', error => {
                    if (error) {
                        console.error(error)

                        return
                    }

                    const documents = [{ brand: 'porsche', model: '911' }, { brand: 'flat', model: '500' }]

                    const cars = new Collecction('cars')

                    cars._saveDocuments(documents, error => {
                        if (error) {
                            console.error(error)

                            return
                        }

                        expect(error).to.be.null

                        fs.readFile('./data/cars.json', 'utf8', (error, documentsJSON) => {
                            if (error) {
                                console.error(error)

                                return
                            }

                            expect(documentsJSON).to.equal(JSON.stringify(documents))

                            done()
                        })
                    })

                })
            })

            it('fails on non-array documents', () => {
                const documents = 'hola documents'

                const cars = new Collecction('cars')

                let errorThrown

                try {
                    cars._saveDocuments(documents, () => { })
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).to.be.instanceOf(TypeError)
                expect(errorThrown.message).to.equal('documents is not an array')
            })

            it('fails on array with non-object document in documents', () => {
                const documents = [{ brand: 'porsche', model: '911' }, { brand: 'fiat', model: '500' }, 'hola mundo']

                const cars = new Collecction('cars')

                let errorThrown

                try {
                    cars._saveDocuments(documents, () => { })
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).to.be.instanceOf(TypeError)
                expect(errorThrown.message).to.equal('a document in documents is not an object')
            })
        })
    })

    describe('> CRUD', () => {
        describe('findOne', () => {
            it('finds an existing document', done => {
                fs.writeFile('./data/cars.json', '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]', error => {
                    if (error) {
                        console.error(error)

                        return
                    }

                    const cars = new Collecction('cars')

                    cars.findOne(car => car.brand === 'fiat', (error, car) => {
                        if (error) {
                            console.error(error)

                            return
                        }

                        expect(error).to.be.null

                        expect(car).to.be.instanceOf(Object)
                        expect(car.brand).to.equal('fiat')
                        expect(car.model).to.equal('500')

                        done()
                    })
                })
            })

            it('fails on callback', () => {
                const cars = new Collecction('cars')

                let errorThrown

                try {
                    cars.findOne()
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).to.be.instanceOf(TypeError)
                expect(errorThrown.message).to.equal('condition callback is not a function')
            })

            it('fails on non-function callback', () => {
                const cars = new Collecction('cars')

                let errorThrown

                try {
                    cars.findOne(123)
                } catch (error) {
                    errorThrown = error
                }

                expect(errorThrown).to.be.instanceOf(TypeError)
                expect(errorThrown.message).to.equal('condition callback is not a function')
            })
        })

        describe('insertOne', () => {
            it('inserts an new document', done => {
                fs.writeFile('./data/cars.json', '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]', error => {
                    if (error) {
                        console.error(error)

                        return
                    }

                    const cars = new Collecction('cars')

                    const newCar = JSON.parse('{ "brand": "seat", "model": "ibiza" }')

                    cars.insertOne(newCar, (error) => {
                        if (error) {
                            console.error(error)

                            return
                        }

                        cars._loadDocuments((error, documents) => {
                            if (error) {
                                console.error(error)

                                return
                            }

                            expect(error).to.be.null

                            expect(documents).to.be.instanceOf(Array)
                            expect(documents.length).to.equal(3)

                            let document = documents[0]
                            expect(document).to.be.instanceOf(Object)
                            expect(document.brand).to.equal('porsche')
                            expect(document.model).to.equal('911')

                            document = documents[1]
                            expect(document.brand).to.equal('fiat')
                            expect(document.model).to.equal('500')

                            document = documents[2]
                            expect(document.brand).to.equal('seat')
                            expect(document.model).to.equal('ibiza')

                            done()
                        })
                    })
                })
            })
        })
    })
})