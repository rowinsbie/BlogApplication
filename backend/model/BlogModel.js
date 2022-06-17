const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add title']
    },
    content: {
        type: String,
        required: [true, 'Please add content']
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);