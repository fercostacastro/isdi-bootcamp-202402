import { validate } from 'com'
import { User, Wod, WodType } from '../data/index.ts'
import { NotFoundError, SystemError } from 'com/errors.ts'

const retrieveRandomWod = (userId: string, category: any): Promise<WodType> => {
    validate.text(userId, 'userId', true)
    validate.text(category, 'category')

   return User.findById(userId)
   .catch(error => { throw new SystemError(error.message) })
   .then(user => {
    if(!user) throw new NotFoundError('user not found')

    return Wod.countDocuments({category: category})
   })
   .then(wodsCount => {
    const jump = Math.floor(Math.random() * wodsCount)

    return Wod.findOne({category}).skip(jump).limit(1)
   })
}

export default retrieveRandomWod