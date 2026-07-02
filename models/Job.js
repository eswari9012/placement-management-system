const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },

    title: {
        type: String,
        required: true
    },

    eligibility: {
        type: String
    },

    salary: {
        type: Number
    },

    deadline: {
        type: Date
    }

}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);