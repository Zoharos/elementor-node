const express = require('express');
const router = express.Router();
const db = require('../../Atlas');

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const current_date = new Date();
    const insert = {
        email,
        password,
        login_time: current_date,
        last_update_time: current_date,
        ip: req.ip,
        user_agent: req.get('User-Agent'),
        last_login: current_date,
        register_time: current_date,
        login_count: 1,
        active: true
    };
    await db.insertOne(insert);
    res.send("registration completed");
    console.log("new user inserted");
  } catch(e) {
    console.log(e);
    res.status(500).send("something went wrong");
  }
}); 

module.exports = router;
