const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: {index: {unique: true}}
    },
    url : {
        type: String,
        required: true
    },
    summary: {
        typed: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    },
    saved: {
        type: Boolean,
        default: false
    }
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;