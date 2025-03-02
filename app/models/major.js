const mongoose = require('mongoose');

const majorSchema = mongoose.Schema(
    {
    name:{
        type: String,
        require: true,
        trim: true
    }
    },{ timestamps: true }
)

module.exports = mongoose.model('major', majorSchema);