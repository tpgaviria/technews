const router = router('express').Router();
const noteController = require('../../controllers/note');

router.post('/', noteController.create);
router.delete('/:id', noteController.delete);

module.exports = router;