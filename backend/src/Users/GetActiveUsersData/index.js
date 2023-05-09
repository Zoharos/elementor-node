const express = require('express');
const router = express.Router();
const db = require('../../Atlas');

router.get('/active', async (req, res) => {
  try {
    const query = { active: true };
    const ans = await db.find(query, { projection: { password: 0 } }).toArray();
    console.log(ans);
    ans ? res.send(ans) : (() => { throw Error("User not found") })();
  } catch(e) {
    console.log(e);
    e.message === "User not found" ? res.status(404).send(e) : res.status(500).send("something went wrong");
  }
}); 

module.exports = router;
