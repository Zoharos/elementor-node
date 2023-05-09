const express = require('express');
const router = express.Router();
const db = require('../../Atlas');

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
}); 

module.exports = router;
