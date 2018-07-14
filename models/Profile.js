const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    githubUserName: {
        type: String
    },
    experience: [
        {
            title: {
                title: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                title: String
            },
            from: {
                title: Date,
                required: true
            },
            to: {
                title: String
            },
            current: {
                title: Boolean,
                default: false
            },
            description: {
                title: String
            }
        }
    ],
    education: [
        {
            school: {
                title: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldOfStudy: {
                title: String,
                required: true
            },
            from: {
                title: Date,
                required: true
            },
            to: {
                title: String
            },
            current: {
                title: Boolean,
                default: false
            },
            description: {
                title: String
            }
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        },
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)