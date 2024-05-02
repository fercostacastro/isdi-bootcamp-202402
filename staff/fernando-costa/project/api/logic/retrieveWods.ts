//@ts-nocheck

import { validate, errors } from 'com'
import { Wod, WodType } from '../data/index.ts'
import { ObjectId, Schema } from 'mongoose'
import { types } from 'util'
const { Types: { ObjectId } } = Schema

const { SystemError, NotFoundError } = errors

function retrieveRandomWods(): Promise<[{ id: string, author: { id: string, email: string }}] | { id: string; author: { id: string; email: string; }}[]> {
    validate.text(userId, 'userId', true)

    return Wod.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!wod)
                throw new NotFoundError('wod not found')

            return Wod.find().populate<{ author: { _id: ObjectId, email: string } }>('author', 'email').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(posts =>
                    wods.map<{ id: string, author: { id: string, email: string }}>(({ _id, author, image, text, date }) => ({
                        id: _id.toString(),
                        author: {
                            id: author._id.toString(),
                            email: author.email
                        },
                    
                    })).reverse()
                )

        })

}

export default retrieveWods