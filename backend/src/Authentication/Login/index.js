const express = require('express');
const router = express.Router();
const db = require('../../Atlas');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = { email, password };
    const update = [{
      $set: {
        login_time: new Date(),
        last_update_time: new Date(),
        ip: req.ip,
        user_agent: req.get('User-Agent'),
        last_login: "$login_time",
        active: true
      }
    }];
    const { value } = await db.findOneAndUpdate(query, update, { returnOriginal: false });
    console.log(value);
    value ? res.send(value) : (() => { throw Error("User not found") })();
    const { modifiedCount } = await db.updateOne(query, { $inc: { login_count: 1 } });
    !modifiedCount && (() => { throw Error("User login count did not update")} )();
  } catch(e) {
    console.log(e);
    e.message === "User not found" ? res.status(404).send(e) : res.status(500).send("something went wrong");
  }
}); 

module.exports = router;
