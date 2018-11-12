const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUser
const cmsPageSchema = new Schema({
    slug: {
        type: String,
        required: [true ,'Slug must have some data'],
    },
    content: {
        type: String,
        required: [true ,'Content must have some data'],
    },
    title: {
        type: String,
        required: [true ,'Title must have some data'],
    }
});


module.exports = mongoose.model('CmsPage', cmsPageSchema);
