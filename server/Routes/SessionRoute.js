const express = require('express');
const create = require('../Controllers/SessionController').create;
const router = express.Router();

router.post('/sessions', create);

module.exports = router;
