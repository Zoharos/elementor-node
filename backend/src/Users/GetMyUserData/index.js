const express = require('express');
const router = express.Router();
const db = require('../../Atlas');

router.get('/me', async (req, res) => {
  try {
    const { email } = req.body;
    const query = { email };
    const ans = await db.findOne(query);
    ans ? res.send({...ans, password: "***"}) : (() => { throw Error("User not found") })();
  } catch(e) {
    console.log(e);
    e.message === "User not found" ? res.status(404).send(e) : res.status(500).send("something went wrong");
  }
}); 

module.exports = router;
