const express = require("express");
const authentication = require("../Controllers/AuthenticationController").authentication;
const router = express.Router();

router.use(authentication);

module.exports = router;
