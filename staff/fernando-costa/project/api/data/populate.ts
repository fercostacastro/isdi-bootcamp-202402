// @ts-nocheck
import mongoose from 'mongoose'

import { User, Wod } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => User.deleteMany())
    .then(() =>
        Promise.all([
            User.create({ name: 'Fernando Costa', email: 'fer@costa.com', password: '123qwe123' }),
            User.create({ name: 'Edna Costa', email: 'edna@costa.com', password: '123qwe123' }),
            User.create({ name: 'Paulo Costa', email: 'paulo@costa.com', password: '123qwe123' }),
            User.create({ name: 'Cassia Costa', email: 'cassia@costa.com', password: '123qwe123' })
        ])
    )
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
