const express = require('express');
const router = express.Router();
const voteControllers = require('../controllers/voteControllers')
const checkAuth = require('../middleware/checkAuth')

router.post('/', checkAuth.isLogin, voteControllers.create);
router.delete('/:id', checkAuth.isLogin, voteControllers.remove);

module.exports = router;