const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');


router.get('/', (req, res) => res.render('index'));

router.get('/scrape', (req, res) => {
    axios.get('https://www.techradar.com/news').then((response) => {
        var $ = cheerio.load(response.data);

        var articles = [];

        $('.listingResult').each(function (i, element) {

            const title = $(this).find('.article-name').text();
            const url = $(this).children('a').attr('href');
            const summary = $(this).find('.synopsis').text();
            const source = "TechRadar";

            if (title && url && summary) {

                const articleData = {
                    title: title,
                    url: url,
                    summary: summary,
                    source: source
                };

                articles.push(articleData);
            }
        })
        return articles;
    }).then(function (articles) {
        return db.Article.create(articles)
    }).then(function(dbArticle) {
        if(dbArticle.length === 0) {
            res.json({ message: "No new articles."});
        } else {
            res.json({
                message: `Added ${dbArticle.length} new articles.`
            })
        }
    }).catch(function(err) {
        res.json({
            message: "Error"
        })
    });
});


router.get('/articles', (req, res) => {
    db.Article.find({})
        .then((dbArticle) => res.json(dbArticle))
        .catch((err) => res.json(err));
});

module.exports = router;