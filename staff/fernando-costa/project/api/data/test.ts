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

type WodReportType = {
    wod: string
    user: string
    parts: string
}

const wodReport = new Schema ({
    wod: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true
    },

    parts: {
        type: String
    }

})

type PartReportType = {
    part: string
    activities: string
}

const partReport = new Schema ({
    part: {
        type: String,
        required: true
    },

    activities: {
        type: String,
        required: true
    }
})

type ActivityReportType = {
    activity: String
    femaleWeight: number
    maleWeight: number
    reps: number
    time: number
}

const activityReport = new Schema ({
    activity: {
        type: String,
        required: true
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
        type: Number
    }
})

const User = model<UserType>('User', user)
const Activity = model<ActivityType>('Activity', activity)
const Wod = model<WodType>('Wod', wod)
const Part = model<PartType>('Part', part)
const WodReport = model<WodReportType>('WodReport', wodReport)
const PartReport = model<PartReportType>('PartReport', partReport)
const ActivityReport = model<ActivityReportType>('ActivityReport', activityReport)

export {
    UserType,
    User,
    ActivityType,
    Activity,
    WodType,
    Wod,
    PartType,
    Part,
    WodReportType,
    WodReport,
    PartReportType,
    PartReport,
    ActivityReportType,
    ActivityReport
}