const router = require('express').Router();
const articleController = require('../../controllers/article');

router.get('/'. articleController.findAndSort);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.delete);

module.exports = router;