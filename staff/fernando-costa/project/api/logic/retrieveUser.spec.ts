import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

describe('retrieveUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves existing user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando Costa', email: 'fer@costa.com', password: '123qwe123' }))
            .then(user =>
                User.create({ name: 'Cala Baza', email: 'cala@baza.com', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(user.id, user2.id))
                    .then(user => {
                        expect(user.name).to.equal('Cala Baza')
                        expect(user.email).to.equal('cala@baza.com')
                    })
            )

    )

    it('does not retrieve by non-existing user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123qwe123' }))
            .then(user =>
                User.create({ name: 'Fernando Costa', email: 'fer@costa.com', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(new ObjectId().toString(), user2.id))
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('user not found')
                    })
            )
    )

    it('does not retrieve a non-existing target user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando Costa', email: 'fer@costa.com', password: '123qwe123' }))
            .then(user =>
                User.create({ name: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(user.id, new ObjectId().toString()))
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('target user not found')
                    })
            )
    )

    it('retrieve a user with a valid ObjectId', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando Costa', email: 'fer@costa.com', password: '123qwe123', ObjectId: '662f6169a154d9d50432834e' }))
            .then(user =>
                User.create({ name: 'Edna Costa', email: 'edna@costa.com', password: '123qwe123', ObjectId: '662f6169a154d9d50432834f' })
                    .then(user2 => logic.retrieveUser(user.id, user2.id))
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('ID is not valid')
                    })
            )
    )

    it('does not retrieve an existing user with no valid ObjectId', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando Costa', email: 'fer@costa.com', password: '123qwe123', ObjectId: '662f6169a154d9d504328350' }))
            .then(user =>
                User.create({ name: 'Edna Costa', email: 'edna@costa.com', password: '123qwe123', ObjectId: '662f6169a154d9d504' })
                    .then(user2 => logic.retrieveUser(user.id, user2.id))
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('ID is not valid')
                    })
            )

    )
})

after(() => mongoose.disconnect())