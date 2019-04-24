const express = require('express');
const router  = express.Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs")


router.get('/main', (req, res) => {
    res.render('./main/home.ejs')
})

module.exports = router;