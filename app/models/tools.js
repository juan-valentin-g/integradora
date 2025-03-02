const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const toolSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true,
            min: 0
        },
        quality: {
            type: String,
            required: true,
            trim: true
        },
        img: {
            type: [String],
            required: true,
            trim: true
        }
    }, { timestamps: true }
);

toolSchema.plugin(paginate);

module.exports = mongoose.model('Products', toolSchema);