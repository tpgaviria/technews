const db = require('../models');

module.exports = {
    create: function (req, res) {
        db.Note
            .create(req.body)
            .then((dbNote) => res.json(dbNote));
    },
    delete: function (req, res) {
        db.Note
            .remove({ _id: req..params.id })
            .then((dbNote) => res.json(dbNote));
    }
}