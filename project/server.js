const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.static('./dist'));
app.use(bodyParser.json());

app.get('/api/catalog', (req, res) => {
    const data = fs.readFileSync('./data.json');
    const object = JSON.parse(data);
    res.json(object);
});

app.get('/api/cart', (req, res) => {
    const data = fs.readFileSync('./cart.json');
    const cart = JSON.parse(data);
    res.json(cart);
});

app.post('/api/addToCart', (req, res) => {
    const data = fs.readFileSync('./cart.json');
    const cart = JSON.parse(data);

    const item = req.body;

    const itemIndex = cart.findIndex(
      ({ id_product }) => id_product === item.id_product
    );
    if (itemIndex !== -1) {
      cart[itemIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    fs.writeFileSync('./cart.json', JSON.stringify(cart));

    res.json(cart);
});

app.delete('/api/removeFromCart', (req, res) => {
    const data = fs.readFileSync('./cart.json');
    let cart = JSON.parse(data);

    const id = req.body.id;

    cart = cart.filter(
      ({ id_product }) => id_product !== id
    );

    fs.writeFileSync('./cart.json', JSON.stringify(cart));

    res.json(cart);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening port ${PORT}`);
});
