const express = require('express');
const router = express.Router();
const questionControllers = require('../controllers/questionControllers')
const checkAuth = require('../middleware/checkAuth')

router.post('/', checkAuth.isLogin, questionControllers.create);
router.get('/', questionControllers.getAll);
router.get('/myquestions', checkAuth.isLogin, questionControllers.getMy);
router.get('/:id', questionControllers.getOne);
router.put('/:id', checkAuth.isLogin, questionControllers.update);
router.delete('/:id', checkAuth.isLogin, questionControllers.remove);

module.exports = router;
