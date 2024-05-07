import dotenv from 'dotenv'
import mongoose from 'mongoose'
import logic from './index.ts'
import { expect } from 'chai'
import { Activity, Part, User, Wod } from '../data/index.ts'

dotenv.config()

describe('retrieveWod', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves a random wod filtered by category from an existing user', () =>
        Promise.all([
            User.deleteMany(),
            Wod.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then((user) =>
                        Promise.all([
                            Wod.create({
                                name: 'Kass', category: 'strength', parts:
                                    new Part({
                                        name: '5 ROUNDS', reps: 7, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 3 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'strength', parts:
                                    new Part({
                                        name: 'FYS', reps: 2, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 12 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 2 }),
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'normalwod', parts:
                                    new Part({
                                        name: ' YNCM', reps: 7, activities: [
                                            new Activity({ name: '2 ROUNDS FOR TIME', reps: 8 }),

                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kess', category: 'endurance', parts:
                                    new Part({
                                        name: '10 ROUNDS', reps: 10, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 13 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kuss', category: 'endurance', parts:
                                    new Part({
                                        name: '8 ROUNDS', reps: 9, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 11 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kiss', category: 'benchmarks', parts:
                                    new Part({
                                        name: '3 ROUNDS', reps: 5, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 6 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 7 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 9 })
                                        ]
                                    })
                            }),

                        ])
                            .then(() => {
                                return logic.retrieveRandomWod(user.id, 'strength')
                                    .then(wod => {
                                        expect(wod.category).to.equal('strength')
                                    })
                            })
                    )
            )
    )

    it('retrieves a random wod filtered by category from an existing user', () =>
        Promise.all([
            User.deleteMany(),
            Wod.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then((user) =>
                        Promise.all([
                            Wod.create({
                                name: 'Kass', category: 'strength', parts:
                                    new Part({
                                        name: '5 ROUNDS', reps: 7, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 3 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'strength', parts:
                                    new Part({
                                        name: 'FYS', reps: 2, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 12 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 2 }),
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'normalwod', parts:
                                    new Part({
                                        name: ' YNCM', reps: 7, activities: [
                                            new Activity({ name: '2 ROUNDS FOR TIME', reps: 8 }),

                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kess', category: 'endurance', parts:
                                    new Part({
                                        name: '10 ROUNDS', reps: 10, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 13 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kiss', category: 'endurance', parts:
                                    new Part({
                                        name: '8 ROUNDS', reps: 9, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 11 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Koss', category: 'benchmarks', parts:
                                    new Part({
                                        name: '3 ROUNDS', reps: 5, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 6 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 7 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 9 })
                                        ]
                                    })
                            }),

                        ])
                            .then(() => {
                                return logic.retrieveRandomWod(user.id, 'endurance')
                                    .then(wod => {
                                        expect(wod.category).to.equal('endurance')
                                    })
                            })
                    )
            )
    )

    it('retrieves a random wod filtered by category from an existing user', () =>
        Promise.all([
            User.deleteMany(),
            Wod.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then((user) =>
                        Promise.all([
                            Wod.create({
                                name: 'Kass', category: 'strength', parts:
                                    new Part({
                                        name: '5 ROUNDS', reps: 7, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 3 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'strength', parts:
                                    new Part({
                                        name: 'FYS', reps: 2, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 12 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 2 }),
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'normalwod', parts:
                                    new Part({
                                        name: ' YNCM', reps: 7, activities: [
                                            new Activity({ name: '2 ROUNDS FOR TIME', reps: 8 }),

                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kess', category: 'endurance', parts:
                                    new Part({
                                        name: '10 ROUNDS', reps: 10, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 13 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kiss', category: 'endurance', parts:
                                    new Part({
                                        name: '8 ROUNDS', reps: 9, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 11 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Koss', category: 'benchmarks', parts:
                                    new Part({
                                        name: '3 ROUNDS', reps: 5, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 6 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 7 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 9 })
                                        ]
                                    })
                            }),

                        ])
                            .then(() => {
                                return logic.retrieveRandomWod(user.id, 'benchmarks')
                                    .then(wod => {
                                        expect(wod.category).to.equal('benchmarks')
                                    })
                            })
                    )
            )
    )

    it('retrieves a random wod filtered by category from an existing user', () =>
        Promise.all([
            User.deleteMany(),
            Wod.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then((user) =>
                        Promise.all([
                            Wod.create({
                                name: 'Kass', category: 'strength', parts:
                                    new Part({
                                        name: '5 ROUNDS', reps: 7, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 3 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'strength', parts:
                                    new Part({
                                        name: 'FYS', reps: 2, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 12 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 2 }),
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'normalwod', parts:
                                    new Part({
                                        name: ' YNCM', reps: 7, activities: [
                                            new Activity({ name: '2 ROUNDS FOR TIME', reps: 8 }),

                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kess', category: 'endurance', parts:
                                    new Part({
                                        name: '10 ROUNDS', reps: 10, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 13 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kiss', category: 'endurance', parts:
                                    new Part({
                                        name: '8 ROUNDS', reps: 9, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 11 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Koss', category: 'benchmarks', parts:
                                    new Part({
                                        name: '3 ROUNDS', reps: 5, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 6 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 7 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 9 })
                                        ]
                                    })
                            }),

                        ])
                            .then(() => {
                                return logic.retrieveRandomWod(user.id, 'normalwod')
                                    .then(wod => {
                                        expect(wod.category).to.equal('normalwod')
                                    })
                            })
                    )
            )
    )
    after(mongoose.disconnect)
})