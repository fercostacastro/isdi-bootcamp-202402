import mongoose from 'mongoose'

const { Schema, model } = mongoose

// const ObjectId = Schema.Types.ObjectId
const { Types: { ObjectId } } = Schema


const user = new Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unque: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const post = new Schema ({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    date: {
        type: Date,
        required: true
    }
})

const User = model('User', user)
const Post = model('Post', post)


mongoose.connect('mongodb://localhost:27017/isdigram')
    .then(() => {
        User.deleteMany()
            .then(() => {
                Post.deleteMany()
                    .then(() => {
                        User.create({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' })
                            .then(result => {
                                let count = 1

                                const Post1 = { author: user1._id, image: `https://fakeimg.pl/500x400/ff0000?text=Hello+${count}&font=lobster`, text: `hello post ${count}`, date: new Date }

                                Post.create(post1)
                                    .then(() => {
                                        count++

                                        const Post2 = { author: user1._id, image: `https://fakeimg.pl/500x400/ff0000?text=Hello+${count}&font=lobster`, text: `hello post ${count}`, date: new Date }

                                        Post.create(post2)
                                            .then(() => {
                                                count++

                                                const insertedPost3 = { author: user1._id, image: `https://fakeimg.pl/500x400/ff0000?text=Hello+${count}&font=lobster`, text: `hello post ${count}`, date: new Date }

                                                Post.create(post3)
                                                    .then(() => {
                                                        mongoose.disconnect()
                                                            .then(() => console.log('populated'))
                                                            .catch(console.error)
                                                    })
                                                    .catch(console.error)
                                            })
                                            .catch(console.error)
                                    })
                                    .catch(console.error)
                            })
                            .catch(console.error)
                    })
                    .catch(console.error)
            })
            .catch(console.error)
    })
    .catch(console.error)