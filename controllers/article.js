var db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then((dbArticle) => res.json(dbArticle));
    },
    delete: function (req, res) {
        db.Article.remove({ _id: req.params.id })
            .then((dbArticle) => res.json(dbArticle));
    }
}