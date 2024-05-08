import dotenv from 'dotenv'

import mongoose from 'mongoose'

import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { DuplicityError } = errors

describe('registerUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds a new user', () =>
        User.deleteMany()
            .then(() => logic.registerUser('Fernando Costa', 'fer@costa.com', '123qwe123'))
            .then(() => User.findOne({ email: 'fer@costa.com' }))
            .then(user => {
                expect(!!user).to.be.true
                expect(user.name).to.equal('Fernando Costa')
                expect(user.email).to.equal('fer@costa.com')
                expect(user.password).to.equal('123qwe123')
            })
    )

    it('fails on existing users', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Fernando Costa', email: 'fer@fer.com', password: '123qwe123' }))
            .then(() =>
                logic.registerUser('Fernando Costa', 'fer@costa.com', '123qwe123')
                    .catch(error => {
                        expect(error).to.be.instanceOf(DuplicityError)
                        expect(error.message).to.equal('user already exists')
                    })
            )
    )

    it('fails on non string name', () => {
        let errorThrown

        try {
            // @ts-ignore
            logic.registerUser(123, 'fer@costa.com', '123qwe123')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(TypeError)
        expect(errorThrown.message).to.equal('name 123 is not a string')
    })

    it('fails on empty name', () => {
        let errorThrown

        try {
            // @ts-ignore
            logic.registerUser('', 'fer@costa.com', '123qwe123')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('name >< is empty or blank')
    })

    it('fails on empty email', () => {
        let errorThrown
    
        try {
            // @ts-ignore
            logic.registerUser('', '123qwe123')
        } catch (error) {
            errorThrown = error
        }
    
        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('email >< is empty or blank')
    })
    
    it('fails on empty password', () => {
        let errorThrown
    
        try {
            // @ts-ignore
            logic.registerUser('fer@costa.com', '')
        } catch (error) {
            errorThrown = error
        }
    
        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('password >< is empty or blank')
    })
    

    after(() => mongoose.disconnect())
})