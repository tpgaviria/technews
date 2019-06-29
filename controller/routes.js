const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');


router.get('/', (req, res) => res.render('index'));

router.get('/scrape', (req, res) => {
    axios.get('https://www.techradar.com/news').then((response) => {
        var $ = cheerio.load(response.data);

        $('.listingResult').each(function(i, element) {
            var result = {};

            console.log("-------------------------")
            console.log($(this).children('a').attr('href'));
            console.log($(this).find('.article-name').text());
            console.log($(this).find('.synopsis').text());

            result.title = "title";
            result.url = "url";

            // db.Article.create(result)
            //     .then((dbArticle) => console.log(dbArticle))
            //     .catch((err) => console.log(err));

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