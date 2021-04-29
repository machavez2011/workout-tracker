const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    type: { type: String, required: true },
    category: { type: String, required: true },
    goal: {
        isHit: { type: Boolean, required: true },
        weight: { type: Number, required: false },
        sets: { type: Number, required: false },
        reps: { type: Number, required: false }
    }
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;