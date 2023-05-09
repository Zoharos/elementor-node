const express = require('express');
const router = express.Router();
const db = require('../../Atlas');

router.post('/logout', async (req, res) => {
  try {
    const { email } = req.body;
    const query = { email };
    const update = {
      $set: {
        active: false
      }
    };
    const { value } = await db.findOneAndUpdate(query, update, { returnOriginal: false });
    value ? res.send(value) : (() => { throw Error("User not found") })();
  } catch(e) {
    console.log(e);
    e.message === "User not found" ? res.status(404).send(e) : res.status(500).send("something went wrong");
  }
}); 

module.exports = router;
