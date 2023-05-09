require('dotenv').config();
const express = require('express');
const db = require('./Atlas');
const app = express();


app.get('/', async (req, res) => {
    const ans = await db.findOne({ title: 'zohar' });
    console.log(ans);
    res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
