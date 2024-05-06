import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

import { Activity, Part, User, Wod } from '../data/index.ts'


dotenv.config()

const { CredentialsError, NotFoundError } = errors

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
                                name: 'Kass', category: 'Strength', parts:
                                    new Part({
                                        name: '5 ROUNDS', reps: 7, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 3 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'Strength', parts:
                                    new Part({
                                        name: 'FYS', reps: 2, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 12 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 2 }),
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'Normal WOD', parts:
                                    new Part({
                                        name: ' YNCM', reps: 7, activities: [
                                            new Activity({ name: '2 ROUNDS FOR TIME', reps: 8 }),

                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kess', category: 'Endurance', parts:
                                    new Part({
                                        name: '10 ROUNDS', reps: 10, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 13 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kuss', category: 'Endurance', parts:
                                    new Part({
                                        name: '8 ROUNDS', reps: 9, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 11 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kiss', category: 'Benchmark', parts:
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
                                return logic.retrieveRandomWod(user.id, 'Strength')
                                    .then(wod => {
                                        expect(wod.category).to.equal('Strength')
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
                                name: 'Kass', category: 'Strength', parts:
                                    new Part({
                                        name: '5 ROUNDS', reps: 7, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 3 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'Strength', parts:
                                    new Part({
                                        name: 'FYS', reps: 2, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 12 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 2 }),
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'Normal WOD', parts:
                                    new Part({
                                        name: ' YNCM', reps: 7, activities: [
                                            new Activity({ name: '2 ROUNDS FOR TIME', reps: 8 }),

                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kess', category: 'Endurance', parts:
                                    new Part({
                                        name: '10 ROUNDS', reps: 10, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 13 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kiss', category: 'Endurance', parts:
                                    new Part({
                                        name: '8 ROUNDS', reps: 9, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 11 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Koss', category: 'Benchmark', parts:
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
                                return logic.retrieveRandomWod(user.id, 'Endurance')
                                    .then(wod => {
                                        expect(wod.category).to.equal('Endurance')
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
                                name: 'Kass', category: 'Strength', parts:
                                    new Part({
                                        name: '5 ROUNDS', reps: 7, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 3 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'Strength', parts:
                                    new Part({
                                        name: 'FYS', reps: 2, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 12 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 2 }),
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'Normal WOD', parts:
                                    new Part({
                                        name: ' YNCM', reps: 7, activities: [
                                            new Activity({ name: '2 ROUNDS FOR TIME', reps: 8 }),

                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kess', category: 'Endurance', parts:
                                    new Part({
                                        name: '10 ROUNDS', reps: 10, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 13 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kiss', category: 'Endurance', parts:
                                    new Part({
                                        name: '8 ROUNDS', reps: 9, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 11 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Koss', category: 'Benchmark', parts:
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
                                return logic.retrieveRandomWod(user.id, 'Benchmark')
                                    .then(wod => {
                                        expect(wod.category).to.equal('Benchmark')
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
                                name: 'Kass', category: 'Strength', parts:
                                    new Part({
                                        name: '5 ROUNDS', reps: 7, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 3 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'Strength', parts:
                                    new Part({
                                        name: 'FYS', reps: 2, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 12 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 2 }),
                                        ]
                                    })
                            }),
                            Wod.create({
                                category: 'Normal WOD', parts:
                                    new Part({
                                        name: ' YNCM', reps: 7, activities: [
                                            new Activity({ name: '2 ROUNDS FOR TIME', reps: 8 }),

                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kess', category: 'Endurance', parts:
                                    new Part({
                                        name: '10 ROUNDS', reps: 10, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 13 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Kiss', category: 'Endurance', parts:
                                    new Part({
                                        name: '8 ROUNDS', reps: 9, activities: [
                                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 11 }),
                                            new Activity({ name: '25 DOUBLE UNDERS', reps: 12 })
                                        ]
                                    })
                            }),
                            Wod.create({
                                name: 'Koss', category: 'Benchmark', parts:
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
                                return logic.retrieveRandomWod(user.id, 'Normal WOD')
                                    .then(wod => {
                                        expect(wod.category).to.equal('Normal WOD')
                                    })
                            })
                    )
            )
    )
    after(mongoose.disconnect)
})