const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.static('./dist'));

app.get('/api/catalog', (req, res) => {
    const data = fs.readFileSync('./data.json');
    const object = JSON.parse(data);
    res.json(object);
});

app.listen(3000, () => {
    console.log('App is listening port 3000');
});