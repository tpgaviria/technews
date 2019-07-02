const router = require('express').Router();
const scrapeRoutes = require('./scrape');
const noteRoutes = require('./notes');
const articleRoutes = require('./article');

router.use('/scrape', scrapeRoutes);
router.use('/notes', noteRoutes);
router.use('/article', articleRoutes);

module.exports = router;