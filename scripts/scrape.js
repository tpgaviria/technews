var axios = require('axios');
var cheerio = require('cheerio');

const scrape = () => {
    return axios.get('https://www.techradar.com/news').then((response) => {
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
    });
};

module.exports = scrape;