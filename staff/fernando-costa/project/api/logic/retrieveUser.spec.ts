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
            .then(() => User.create({ name: 'Fernando', email: 'fer@fer.com', password: '123qwe123' }))
            .then(user =>
                User.create({ name: 'Cala Baza', email: 'cala@baza.com', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(user.id, user2.id))
                    .then(user => {
                        expect(user.name).to.equal('Cala Baza')
                        expect(user.email).to.equal('cala@baza.com')
                    })
            )

    )

    it('does no retrieve by non-existing user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123qwe123' }))
            .then(user =>
                User.create({ name: 'Fernando', email: 'fer@fer.com', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(new ObjectId().toString(), user2.id))
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('user not found')
                    })
            )
    )

    it('does no retrieve a non-existing target user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando', email: 'fer@fer.com', password: '123qwe123' }))
            .then(user =>
                User.create({ name: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(user.id, new ObjectId().toString()))
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('target user not found')
                    })
            )
    )

    // TODO test all methods

    after(() => mongoose.disconnect())
})