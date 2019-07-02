var db = require('../models');

module.exports = {
    findAndSort: function (req, res) {
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then((dbArticle) => res.json(dbArticle));
    },
    update: function (req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
            .then((dbArticle) => res.json(dbArticle))
    },
    delete: function (req, res) {
        db.Article
            .remove({ _id: req.params.id })
            .then((dbArticle) => res.json(dbArticle));
    }
}