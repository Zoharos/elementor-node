require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./Atlas');
const router = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send('Hello, World!');
});
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
