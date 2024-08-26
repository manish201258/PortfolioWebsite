const express = require('express');
const router = express.Router();
const { contact } = require("../controllers/auth-controller");

router.post("/contactData", contact);

module.exports = router;
