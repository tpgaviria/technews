const db = require('../models');
const scrape = require('../scripts/scrape');

module.exports = {
    scrapeArticles: function (req, res) {
        return scrape()
            .then((article) => { return db.Article.create(articles) })
            .then((dbArticle) => {
                if (dbArticle.length === 0) {
                    res.json({
                        message: "No new articles"
                    })
                } else {
                    res.json({
                        message: `${dbArticle.length} articles added.`
                    })
                }
            })
            .catch((err) => {
                res.json({
                    message: "Error"
                })
            })
    }
};
