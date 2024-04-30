// @ts-nocheck
import mongoose from 'mongoose'

import { Wod, Part, Activity } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wod.deleteMany())
    .then(() =>
        Promise.all([
            Wod.create({
                category: 'Normal Wod', parts: [
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
                name: 'Angie', category: 'BenchMarks', parts: [
                    new Part({
                        name: 'FOR TIME, YOU MUST COMPLETE EACH EXERCISE BEFORE MOVING ON TO THE NEXT', reps: 'as many reps as possible', activities: [
                            new Activity({ name: '100 PULL-UPS', reps: 100 }),
                            new Activity({ name: '100 PUSH-UPS', reps: 100 }),
                            new Activity({ name: '100 SQUATS', reps: 100 })
                        ]
                    })

                ]
            }),
            Wod.create({
                category: 'Strength', parts: [
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
            Wod.create({
                category: 'Endurance', parts: [
                    new Part({
                        name: '2 ROUNDS', activities: [
                            new Activity({ name: '1KM RUN' }),
                            new Activity({ name: '15 DUAL DB THRUSTERS' }),
                            new Activity({ name: '1KM ROW' }),
                            new Activity({ name: '15 DUAL DB THRUSTERS' })
                        ]
                    })
                ]
            }),
            Wod.create({
                category: 'Normal Wod', parts: [
                    new Part({
                        name: 'FROM 0 TO 15\'', activities: [
                            new Activity({ name: '10 ROUNDS FOR TIME', reps: 10 }),
                            new Activity({ name: '5 DUAL DB PUSH PRESS', reps: 5 }),
                            new Activity({ name: '25 DOUBLE UNDERS', reps: 25 }),
                            new Activity({ name: 'REST 5\'', time: '5\'' })
                        ]
                    }),
                    new Part({
                        name: 'FROM 20\' TO 15\'', reps: 10, activities: [
                            new Activity({ name: '10 DUAL DB PUSH PRESS', reps: 10 }),
                            new Activity({ name: '5 BAR MUSCLE UP', reps: 5 }),
                        ]
                    })
                ]
            }),
            Wod.create({
                name: 'Barbara', category: 'BenchMarks', parts: [
                    new Part({
                        name: '5 ROUNDS', activities: [
                            new Activity({ name: '20 PULL-UPS' }),
                            new Activity({ name: '30 PUSH-UPS' }),
                            new Activity({ name: '40 SIT-UPS' }),
                            new Activity({ name: '50 SQUATS' })
                        ]
                    })

                ]
            }),
            Wod.create({
                category: 'Strength', parts: [
                    new Part({
                        name: '2 ROUNDS FOR QUALITY', activities: [
                            new Activity({ name: '6 DEFICIT HSPU', reps: 6 }),
                            new Activity({ name: '12 REVERSE LUNGES', reps: 12 }),
                            new Activity({ name: 'REST 1\'', time: '1\'' })
                        ]
                    }),
                    new Part({
                        name: '3 ROUNDS FOR QUALITY', reps: 3, activities: [
                            new Activity({ name: '10 DB CURL BICEPS', reps: 10 }),
                            new Activity({ name: 'REST 2\'', time: '2\'' }),
                            new Activity({ name: '10 SUMO DEADLIFT', reps: 10 }),
                            new Activity({ name: 'REST 2\'', time: '2\'' }),
                            new Activity({ name: '6 DB PUSH PRESS', reps: 6 }),
                            new Activity({ name: 'REST 2\'', time: '2\'' })
                        ]
                    })
                ]
            }),
            Wod.create({
                category: 'Endurance', parts: [
                    new Part({
                        name: 'AMRAP 45\' (AS MANY REPS AS POSSIBLE)', activities: [
                            new Activity({ name: '50 MOUNTAIN CLIMBERS', REPS: 50 }),
                            new Activity({ name: '50 DOUBLE UNDERS', REPS: 50 }),
                            new Activity({ name: '400M RUN' }),
                            new Activity({ name: '50 DOUBLE UNDERS', REPS: 50 }),
                            new Activity({ name: '50 MOUNTAIN CLIMBERS', REPS: 50 }),
                        ]
                    })
                ]
            }),
            Wod.create({
                category: 'Normal Wod', parts: [
                    new Part({
                        name: 'TIME CAP 45\'', activities: [
                            new Activity({ name: '50 V-UPS', reps: 50 }),
                            new Activity({ name: '5 LEGLESS ROPE CLIMBS', reps: 5 }),
                            new Activity({ name: '80 BURPEES', reps: 80 }),
                            new Activity({ name: '50 PULL-UPS', reps: 50 }),
                            new Activity({ name: '70 DIPS', reps: 70 }),
                            new Activity({ name: '50 BURPEE BOX JUMP OVER', reps: 50 }),
                            new Activity({ name: '40 CHIN-UPS', reps: 40 }),
                        ]
                    })
                ]
            }),
            Wod.create({
                name: 'Murph', category: 'BenchMarks', parts: [
                    new Part({
                        name: 'FOR TIME. YOU CAN DIVIDE THE EXERCISE AS YOU WANT', activities: [
                            new Activity({ name: '1600M RACE (1 MILE)' }),
                            new Activity({ name: '100 PULL-UPS', reps: 100 }),
                            new Activity({ name: '200 PUSH-UPS', reps: 200 }),
                            new Activity({ name: '300 SQUATS', reps: 300 }),
                            new Activity({ name: '1600M RACE (1 MILE)' })
                        ]
                    })
                ]
            }),
            Wod.create({
                category: 'Strength', parts: [
                    new Part({
                        name: '3 ROUNDS', activities: [
                            new Activity({ name: '8 FRONT SQUAT – 60% RM', reps: 8 }),
                            new Activity({ name: 'REST 1\' EACH ROUND', time: '1\'' }),
                        ]
                    }),
                    new Part({
                        name: '3 ROUNDS ', activities: [
                            new Activity({ name: '5 STRICT PULL-UPS', reps: 5 }),
                            new Activity({ name: '12 DB BENCH PRESS', reps: 12 }),
                            new Activity({ name: '6 PISTOLS (3 EACH LEG)', reps: 6 }),
                            new Activity({ name: 'REST 1\' EACH ROUND', time: '1\'' }),
                        ]
                    })
                ]
            }),
            Wod.create({
                category: 'Endurance', parts: [
                    new Part({
                        name: 'TIME CAP 45\'', activities: [
                            new Activity({ name: '1000M ROW' }),
                            new Activity({ name: '10 DEVIL PRESS', reps: 10 }),
                            new Activity({ name: '800M RUN' }),
                            new Activity({ name: '10 MAN MAKERS', reps: 10 }),
                            new Activity({ name: '800M RUN' }),
                            new Activity({ name: '1000M ROW/SKI/BIKE' })
                        ]
                    })
                ]
            }),
        ])
    )
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)