const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = mongoose.Schema(
    {
        apellidoP: {
            type: String,
            required: true,
            trim: true
        },
        apellidoM: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        major: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'major',
            required: true,
            trim: true
        },
        group: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true
        },
        phone: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        avatar: {
            type: String,
            default: ''
        },
    }, { timestamps: true}
);

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('user',userSchema)