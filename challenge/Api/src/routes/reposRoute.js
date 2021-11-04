const express = require('express');
const router = express.Router();
const controller = require('../controllers/reposController')

router.get('/', controller.get);

module.exports = router;