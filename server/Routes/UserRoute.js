const express = require("express");
const create = require('../controllers/UserController').create;
const router = express.Router();

router.post("/users", create);

module.exports = router;
