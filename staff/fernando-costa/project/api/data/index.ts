import mongoose from 'mongoose'

const { Schema, model } = mongoose

type UserType = {
    name: string
    email: string
    password: string
}

const user = new Schema ({

    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

type ActivityType = {
    name?: string
    femaleWeight?: number
    maleWeight?: number
    reps?: number
    time?: number
}

const activity = new Schema ({
    name: {
        type: String
    },

    femaleWeight: {
        type: Number
    },

    maleWeight: {
        type: Number
    },

    reps: {
        type: Number
    },

    time: {
        type: String
    }
})


type PartType = {
    name: string
    reps: number
    activities: ActivityType
}

const part = new Schema ({
    name: {
        type: String
    },
    
    reps: {
        type: Number
    },
    
    activities: {
        type: [activity]
    }
})

type WodType = {
    name?: string
    category: string,
    parts: PartType
}

const wod = new Schema ({
    name: {
        type: String,
    },

    category: {
        type: String,
        required: true
    },

    parts: {
        type: [part]
    }
})


const User = model<UserType>('User', user)
const Activity = model<ActivityType>('Activity', activity)
const Part = model<PartType>('Part', part)
const Wod = model<WodType>('Wod', wod)


export {
    UserType,
    User,
    PartType,
    Part,
    ActivityType,
    Activity,
    WodType,
    Wod
}