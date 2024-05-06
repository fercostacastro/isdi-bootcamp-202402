import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

const { ContentError } = errors

dotenv.config()

const { CredentialsError, NotFoundError } = errors

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds on existing user and correct credentials', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando Costa', email: 'fer@costa.com', password: '123qwe123' }))
            .then(user =>
                logic.authenticateUser('fer@costa.com', '123qwe123')
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.equal(user.id)
                    })
            )
    )

    it('fails on existing user and incorrect password', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando Costa', email: 'fer@costa.com', password: '123qwe123' }))
            .then(() => logic.authenticateUser('fer@costa.com', '123qwe123qwe'))
            .catch(error => {
                expect(error).to.be.instanceOf(CredentialsError)
                expect(error.message).to.equal('wrong password')
            })
    )

    it('fails on existing user and incorrect email', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando Costa', email: 'fer@costa2.com', password: '123qwe123' }))
            .then(() => logic.authenticateUser('fer@costa2.com', '123qwe123'))
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    )


    after(() => mongoose.disconnect())
})