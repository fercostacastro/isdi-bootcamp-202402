import { validate } from 'com'
import { User, Wod, WodType } from '../data/index.ts'
import { NotFoundError, SystemError } from 'com/errors.ts'

type Activity = {
    id:string
    name?: string
    femaleWeight?: number
    maleWeight?: number
    reps?: number
    time?: number
}

type Part = {
    id:string
    name: string
    reps: number
    activities: [Activity]
}

type Wod = {
    id:string
    name?: string
    category: string
    parts: [Part]
 }

const retrieveRandomWod = (userId: string, category: any): Promise<Wod> => {
    validate.text(userId, 'userId', true)
    validate.text(category, 'category')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Wod.countDocuments({ category: category })
        })
        .then(wodsCount => {
            const jump = Math.floor(Math.random() * wodsCount)

            return Wod.findOne({ category }).skip(jump).limit(1).lean()
        })
        .then(wod => {
            const wod2 = {} as Wod

            wod2.id = wod._id.toString()
            wod2.name = wod.name
            wod2.category = wod.category
            wod.parts = wod.parts.map(part => {
                const part2 = {} as Part

                part2.id = part._id.toString()
                part2.name = part.name
                part2.reps = part.reps

                part2.activities = part.activities.map(activity => {
                    const activity2 = {} as Activity

                    activity2.id = activity._id.toString()
                    
                    activity2.name = activity.name
                    activity2.femaleWeight = activity.femaleWeight
                    activity2.maleWeight = activity.maleWeight
                    activity2.reps = activity.reps
                    activity2.time = activity.time

                    return activity2
                })

                return part2
            })

            return wod2
        })
}

export default retrieveRandomWod