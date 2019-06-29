var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res) => res.render('index'));

router.get('/scrape', (req, res) => {
    axios.get('https://www.techradar.com/').then((response) => {
        var $ = cheerio.load(response.data);

        $('.article-link').each((i, element) => {
            var result = {};

            result.title = $(this).find('.article-name').text;
            result.url = $(this).attr('href');

            db.Article.create(result)
                .then((dbArticle) => console.log(dbArticle))
                .catch((err) => console.log(err));

        })

        res.send('Scrape complete');
    })
});

router.get('/articles', (req, res) => {
    db.Article.find({})
        .then((dbArticle) => res.json(dbArticle))
        .catch((err) => res.json(err));
});

module.exports = router;