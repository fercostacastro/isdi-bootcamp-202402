// @ts-nocheck
import mongoose from 'mongoose'

import { Wod, Part, Activity } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wod.deleteMany())
    .then(() =>
        Promise.all([
            Wod.create({
                category: 'Normal Wod', description: '', parts: [
                    new Part({
                        name: '4 SERIES', reps: 4, activities: [
                            new Activity({ name: '20" MAX REPS STRICT WALL FACING HSPU', time: '20"' }),
                            new Activity({ name: 'REST 1\'', time: '1\'' }),
                            new Activity({ name: '20" MAX REPS STRICT HSPU', time: '20"' }),
                            new Activity({ name: 'REST 1\'', time: '1\'' })
                        ]
                    }),
                    new Part({
                        name: '3 ROUNDS FOR TIME', reps: 3, activities: [
                            new Activity({ name: '50 WALL BALL', reps: 50 }),
                            new Activity({ name: '50 LATERAL BURPEE BOX JUMP OVER', reps: 50 })
                        ]
                    })
                ]
            }),
            Wod.create({
                name: 'Angie', category: 'BenchMarks', description: '', parts: [
                    new Part({
                        name: 'FOR TIME, YOU MUST COMPLETE EACH EXERCISE BEFORE MOVING ON TO THE NEXT', reps: 'as many reps as possible', activities: [
                            new Activity({ name: '100 PULL-UPS' }),
                            new Activity({ name: '100 PUSH-UPS' }),
                            new Activity({ name: '100 SQUATS' })
                        ]
                    })

                ]
            }),
            Wod.create({
                category: 'Strength', description: '', parts: [
                    new Part({
                        name: '2 SERIES', activities: [
                            new Activity({ name: '10 BACK SQUATS - 75% RM', reps: 10 }),
                            new Activity({ name: '10 BACK SQUATS - 50% RM', reps: 10 }),
                            new Activity({ name: 'REST 1\'', time: '1\'' })
                        ]
                    }),
                    new Part({
                        name: '3 ROUNDS FOR QUALITY', reps: 3, activities: [
                            new Activity({ name: '20 PUSH UPS', reps: 20 }),
                            new Activity({ name: 'REST 2\'', time: '2\'' }),
                            new Activity({ name: '20 DB LUNGES', reps: 20 }),
                            new Activity({ name: 'REST 2\'', time: '2\'' }),
                            new Activity({ name: '20 DIPS', reps: 20 }),
                            new Activity({ name: 'REST 2\'', time: '2\'' })
                        ]
                    })
                ]

            }),
            Wod.create({ category: 'Endurance', description: '' }),
            Wod.create({ category: 'Normal Wod', description: '' }),
            Wod.create({ name: 'Annie', category: 'BenchMarks', description: '' }),
            Wod.create({ category: 'Strength', description: '' }),
            Wod.create({ category: 'Endurance', description: '' }),
            Wod.create({ category: 'Normal Wod', description: '' }),
            Wod.create({ name: 'Murph', category: 'BenchMarks', description: '' }),
            Wod.create({ category: 'Strength', description: '' }),
            Wod.create({ category: 'Endurance', description: '' }),
        ])
    )
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
