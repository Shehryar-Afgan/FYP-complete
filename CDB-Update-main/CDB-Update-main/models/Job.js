const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        trim: true
    },
    posted_by: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Jobs', jobSchema)