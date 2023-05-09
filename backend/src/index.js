require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { closeConnection } = require('./Atlas');
const router = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get('/', async (req, res) => {
    res.send('Hello, World!');
});
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

process.on('exit', async () => {
  await closeConnection();
})

module.exports = app